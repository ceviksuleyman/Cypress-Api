/*
http://restapi.adequateshop.com/api/Tourist
 */
describe('POST', function () {

    it('Test-1 Hard coded json object', () => {

        const url = "http://restapi.adequateshop.com/api/Tourist"

        const requestBody = {
            tourist_name: "Cevik2",
            tourist_email: "cevik4@gmail.com",
            tourist_location: "Turkiye"
        }

        cy.request(
            {
                method: 'POST',
                url: url,
                body: requestBody
            }).then((response) => {

            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq("Cevik2")
            expect(response.body.tourist_email).to.eq("cevik4@gmail.com")
            expect(response.body.tourist_location).to.eq("Turkiye")

        })
    })

    it('Test-2 Dynamically generating json object', () => {

        const url = "http://restapi.adequateshop.com/api/Tourist"

        const requestBody = {
            tourist_name: Math.random().toString(3).substring(2),
            tourist_email: Math.random().toString(3).substring(2) + "@gmail.com",
            tourist_location: "Turkiye"
        }

        cy.request(
            {
                method: 'POST',
                url: url,
                body: requestBody
            }).then((response) => {

            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location)

        })
    })

    it.only('Test-3 using fixture', () => {

        const url = "http://restapi.adequateshop.com/api/Tourist"

        cy.fixture('tourist').then((data) => {

            const requestBody = data;

            cy.request(
                {
                    method: 'POST',
                    url: url,
                    body: requestBody
                }
            ).then((response) => {

                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)

                expect(response.body).has.property('tourist_email', requestBody.tourist_email)
                expect(response.body).to.have.property('tourist_email', requestBody.tourist_email)
            })
        })
    })
})