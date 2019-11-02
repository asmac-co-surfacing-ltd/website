describe('Asmac Website Integration', () => {
    
    it('allows users to view the different pages', () => {
        cy.visit('https://asmacsurfacing.co.uk');
        cy.get('.section__title').contains('Testimonials');
        cy.get('.testimonials-container__box').should('have.length', 4);
        cy.get('.masthead__anchor[href="/sectors"]').click();
        cy.get('.sector-list__item').should('have.length', 4);
        cy.get('.masthead__anchor[href="/terms"]').click();
        cy.get('.terms-block__header').should('have.length', 9);
        cy.get('.terms-block__link').should('have.length', 46);
        cy.get('.masthead__anchor[href="/contact"]').click();
        cy.get('.section__title').contains('Contact Us')
        cy.get('.contact__type').should('have.length', 3);
        cy.get('.contact__item').should('have.length', 3)
    });
    
});