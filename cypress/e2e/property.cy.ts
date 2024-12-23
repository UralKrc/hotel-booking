describe("Property Details Page", () => {
  beforeEach(() => {
    cy.visit("/property/1YK15JGO");
  });

  it("should display view policies button", () => {
    // Check if View Policies button exists
    cy.get("button")
      .contains("View Policies")
      .should("exist")
      .and("be.visible");
  });

  it("should have working image carousel with dots", () => {
    // Check if carousel exists
    cy.get(".ant-carousel").should("exist");

    // Check if there are images in the carousel
    cy.get(".ant-carousel .slick-slide").should("have.length.at.least", 1);

    // Check if dots exist
    cy.get(".slick-dots").should("exist");
    cy.get(".slick-dots li").should("have.length.at.least", 1);

    // Click a dot and verify slide change
    cy.get(".slick-dots li").eq(1).click();
    cy.get(".slick-dots li").eq(1).should("have.class", "slick-active");
  });

  it("should navigate to policies page when clicking View Policies", () => {
    // Click View Policies button and verify navigation
    cy.get("button").contains("View Policies").click();
    cy.url().should("include", "/policies");
  });

  it("should display three information cards with correct titles", () => {
    // Check if all three cards exist with correct titles
    cy.get(".ant-card-head-title").should("have.length", 3);

    // Verify specific card titles
    cy.get(".ant-card-head-title").then(($titles) => {
      expect($titles.eq(0)).to.contain("General Information");
      expect($titles.eq(1)).to.contain("Check-in/out Information");
      expect($titles.eq(2)).to.contain("Contact Details");
    });
  });

  it("should navigate to policies page when clicking View Policies", () => {
    // Click View Policies button and verify navigation
    cy.get("button").contains("View Policies").click();
    cy.url().should("include", "/policies");
  });
});
