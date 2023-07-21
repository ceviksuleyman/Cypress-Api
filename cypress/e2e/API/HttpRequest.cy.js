describe("Http Request", function () {

    it("GET", function () {

        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
            .its('status')
            .should('equal', 200)
    })

    it('POST', function () {

        cy.request(
            {
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                body: {
                    title: "test post",
                    body: "This is post call",
                    userId: 1
                }
            }
        ).its('status')
            .should('equal', 201)
    })

    it('PUT', function () {

        cy.request(
            {
                method: 'PUT',
                url: 'https://jsonplaceholder.typicode.com/posts/1',
                body: {
                    title: "test put - Updated",
                    body: "This is put call",
                    userId: 1,
                    id: 1
                }
            }
        ).its('status')
            .should('equal', 200)
    })

    it('DELETE', function () {

        cy.request(
            {
                method: 'DELETE',
                url: 'https://jsonplaceholder.typicode.com/posts/1'
            }
        ).its('status')
            .should('equal', 200)

    })
})