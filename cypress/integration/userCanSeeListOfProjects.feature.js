describe("User can see listof projects", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#projects-tab").click();
  });

  it("displays the first project", () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "My First Website");
      cy.get(".description").should("contain", "This was my first project.");
    });
  });

  it("displays the second project", () => {
    cy.get("#project-2").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "UI Design");
      cy.get(".description").should(
        "contain","Designing user interfaces is fun. I want to learn more about that...");
    });
  });

  it("displays the second project", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Mobile UX");
      cy.get(".description").should(
        "contain",
        "I like to design for the mobile platform. The challenges to build UI's for smartphones is challenging but extremly rewarding"
      );
    });
  });
});
