/// <reference types="cypress" />

describe('Teste para a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

    it('Deve preencher o formulario', () => {
        cy.get('input[placeholder="Nome"]').type('Nicolas')
        cy.get('input[placeholder="E-mail"]').type('nicolas@gmail.com')
        cy.get('input[placeholder="Telefone"]').type('11912345678')
        cy.get('button[type="submit"]').click()
    })

    it('Verifica se o contato foi adicionado na lista', () => {
        cy.get('.sc-iAEyYk > .sc-beqWaB').contains('Nicolas').should('exist', 'Nicolas')
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

    it('Deve remover o primeiro contato da lista', () => {
        cy.contains('Nicolas Mor').should('not.exist')
        cy.get('.delete').last().click()        
    })
})