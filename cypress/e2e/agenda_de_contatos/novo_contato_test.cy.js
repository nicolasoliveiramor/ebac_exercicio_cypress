/// <reference types="cypress" />

describe('Adicionando contato para a agenda de contatos', () => {
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
})