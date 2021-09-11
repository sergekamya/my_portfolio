describe("User can see Resume", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#about-me").click();
  });

  it("displays resume", () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "My Resume");
      cy.get(".description").should("contain", "This is my resume.");
    });
  });
});
