/// <reference types="cypress" />

describe('Removendo um contato da agenda de contatos', () => {
    beforeEach(()  => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

    it('Deve remover o primeiro contato da lista', () => {
        cy.get('.delete').last().click()        
        cy.contains('Nicolas Mor').should('not.exist')
    })
})