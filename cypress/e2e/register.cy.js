import { errorMessages } from "../../src/components/Register";  

describe('Register Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5174/')
  })
  describe('Error Messages', () => {
    it('name input throws error for 2 chars', () => {
      //cy.visit('http://localhost:5174/')
      cy.get('[data-cy="ad-input"]').type('di');
      cy.contains(errorMessages.ad);

    });

    it('surname input throws error for 2 chars', () => {
      //cy.visit('http://localhost:5174/')
      cy.get('[data-cy="soyad-input"]').type('ka');
      cy.contains(errorMessages.soyad);

    });

    it('email input throws error for dicle@wit.', () => {
      //cy.visit('http://localhost:5174/')
      cy.get('[data-cy="email-input"]').type('dicle@wit.');
      cy.contains(errorMessages.email);

    });

    it('password input throws error for 1234', () => {
      //cy.visit('http://localhost:5174/')
      cy.get('[data-cy="password-input"]').type('1234');
      cy.contains(errorMessages.password);

    });


    it('button is disabled for unvalidated inputs.', () => {
      //cy.visit('http://localhost:5174/')
      cy.get('[data-cy="password-input"]').type('1234');
      cy.get('[data-cy="submit-button"]').should('be.disabled');

    });

  })



  describe('Form inputs validated', () => {
    it('button enabled for validated inputs', () => {
      //cy.visit('http://localhost:5174/')
      cy.get('[data-cy="ad-input"]').type('dicle');
      cy.get('[data-cy="soyad-input"]').type('kalaycı');
      cy.get('[data-cy="email-input"]').type('dicle@wit.com.tr');
      cy.get('[data-cy="password-input"]').type('1234Aa**');
      cy.get('[data-cy="submit-button"]').should('not.be.disabled');

    });

    it('submits form on validated inputs', () => {
      //cy.visit('http://localhost:5174/')
      cy.get('[data-cy="ad-input"]').type('dicle');
      cy.get('[data-cy="soyad-input"]').type('kalaycı');
      cy.get('[data-cy="email-input"]').type('dicle@wit.com.tr');
      cy.get('[data-cy="password-input"]').type('1234Aa**');
      cy.get('[data-cy="submit-button"]').click();
      cy.get('[data-cy="response-message"]').should("be.visible");
    });
  });
});



   