/// <reference types="cypress" />

describe('Editando contato na agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

    it('Deve limpar os campos e alterar os dados', () => {
        cy.get('.edit').last().click()
        cy.get('input[placeholder="Nome"]').clear()
        cy.get('input[placeholder="E-mail"]').clear('')
        cy.get('input[placeholder="Telefone"]').clear('') 
        
        cy.get('input[placeholder="Nome"]').type('Nicolas Mor')
        cy.get('input[placeholder="E-mail"]').type('nicolasmor@gmail.com')
        cy.get('input[placeholder="Telefone"]').type('11940028922')
        cy.get('.alterar').click()
    
        cy.get('.sc-eDDNvR > li').last().should('contain.text', 'nicolasmor@gmail.com')
    })
})
