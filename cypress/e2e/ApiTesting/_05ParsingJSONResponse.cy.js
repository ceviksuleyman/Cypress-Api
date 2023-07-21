describe('Parsing JSON Response', function () {

    it('Parsing simple JSON response', () => {

        cy.request({

            method: 'GET',
            url: 'https://fakestoreapi.com/products',

        }).then((response) => {

            assert.equal(response.status, 200)
            expect(response.status).to.eq(200)
            expect(response.body).has.length(20) //Array

            expect(response.body[0].id).to.equal(1)
            expect(response.body[0].title).to.equal("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
            expect(response.body[0].price).to.equal(109.95)
            expect(response.body[0].rating.rate).to.equal(3.9)


            expect(response.body[19].id).to.equal(20)
            expect(response.body[19].title).to.equal("DANVOUY Womens T Shirt Casual Cotton Short")
            expect(response.body[19].price).to.equal(12.99)
            expect(response.body[19].rating.rate).to.equal(3.6)
        })
    })

    it.only('Parsing complex JSON response', () => {

        // https://fakestoreapi.com/products?limit=5

        let totalPrice = 0;

        cy.request({

            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            qs: {limit: 5}

        }).then((response) => {

            expect(response.status).to.eq(200)
            expect(response.body).has.length(5)

            response.body.forEach(element => {

                totalPrice += element.price
                console.log(totalPrice)
            })
            expect(totalPrice).to.equal(899.23) // limit 5
        })
    })
})