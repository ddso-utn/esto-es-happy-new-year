describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')

    const sumarBuzo = cy.get('.carousel > div:nth-child(2) .item-footer-actions div button:nth-of-type(2)')
    sumarBuzo.click()
    sumarBuzo.click()
    sumarBuzo.click()

    const restarBuzo = cy.get('.carousel > div:nth-child(2) .item-footer-actions div button:nth-of-type(1)')
    restarBuzo.click()

    const carrito = cy.get('.cart')
    carrito.click()

    const primerItem = cy.get('.cart-list > div:nth-child(1)')
    primerItem.should('contain', 'Buzo')

    const cantPrimerItem = cy.get('.cart-list > div:nth-child(1) .cart-item-qty')
    cantPrimerItem.should('contain', '2')

    cy.get('.cart-total-section button').click()

    cy.get('.MuiBox-root h2').should('contain', 'confirmada')

    cy.get('.MuiBox-root button').click()

    cy.get('input[name="nombre"]').type('Juan')
    cy.get('input[name="segundoNombre"]').type('Pablo')
    cy.get('input[name="apellido"]').type('Castiglione')
    cy.get('input[name="email"]').type('juan@gmail.com')
    cy.get('input[name="repetirEmail"]').type('juan@gmail.com')
    
    cy.get('.actions > button:nth-child(2)').should("not.be.disabled")

  })
})