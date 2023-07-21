describe('API Testing', function () {

    let authToken;

    before('creating access token', function () {

        cy.request({

            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                clientName: "Cypress",
                clientEmail: Math.random().toString(5).substring(2) + "@gmail.com"
            }

        }).then((response) => {

            authToken = response.body.accessToken
        })

    })

    it('Creating New Order', () => {

        cy.request({

            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authToken
            },
            body: {
                bookId: 1,
                customerName: "cypress api testing"
            }

        }).then(function (response) {

            expect(response.status).to.eq(201)
            expect(response.body.created).to.eq(true)

        })
    })

    it('Fetching teh orders', function () {

        cy.request({

            method: 'GET',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authToken
            },
            cookies: {
                'cookieName': 'mycookie'
            }
        }).then((response) => {

            expect(response.status).to.eq(200)
            expect(response.body).has.length(1)

        })
    })
})