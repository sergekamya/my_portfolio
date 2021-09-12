describe("User can see Resume", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#about-me").click();
  });

  it("displays passions", () => {
    cy.get("#passion-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Programming");
      cy.get(".description").should("contain", "My latest developed passion is programming and I attend the 2021 Fulstack Developer Bootcamp @ CraftAcademy");
    });
  });

  it("displays passions", () => {
    cy.get("#passion-2").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Acting");
      cy.get(".description").should("contain", "I love to express myself artistically and I have starred in different commercials and short films.");
    });
  });

  it("displays passions", () => {
    cy.get("#passion-3").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Health and Fitness");
      cy.get(".description").should("contain", "I love to workout and try different types of training styles. I strive to have a healthy lifestyle and be as active as possible, even as a future programmer!");
    });
  });
});
