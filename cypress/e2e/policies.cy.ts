/// <reference types="cypress" />

describe("Policies page", () => {
  const id = "VY32018P";
  const policies = {
    noShowPolicies: [
      {
        id: "OYDJDWYX",
        name: "Non Refundable",
        description: "No free no-show",
        amount: 100,
        chargeType: "percentage",
      },
    ],
    cancellationPolicies: [
      {
        id: "1YK9N4YO",
        name: "Flexible",
        description: "Free cancellation until 36 hours before arrival.",
        amount: 100,
        chargeType: "percentage",
        reference: "prior-to-arrival",
        days: 1,
        hours: 12,
      },
      {
        id: "KGQJ0MY4",
        name: "Flexible",
        description: "Free cancellation until check-in",
        amount: 100,
        chargeType: "percentage",
        reference: "prior-to-arrival",
        days: 0,
        hours: 14,
      },
      {
        id: "ZYRWO38Q",
        name: "Non Refundable",
        description: "No free cancellation",
        amount: 100,
        chargeType: "percentage",
        reference: "after-booking",
        days: 0,
        hours: 0,
      },
      {
        id: "KG4E3OYX",
        name: "Strict",
        description: "No free cancellation.",
        amount: 100,
        chargeType: "percentage",
        reference: "after-booking",
        days: 0,
        hours: 0,
      },
    ],
  };

  beforeEach(() => {
    cy.visit(`/property/${id}/policies`);
  });

  it("should display correct number of policy cards", () => {
    cy.contains("h2", "No Show Policies").should("exist");
    cy.contains("h2", "Cancellation Policies").should("exist");

    cy.get(".ant-card").should(
      "have.length",
      policies.noShowPolicies.length + policies.cancellationPolicies.length
    );
  });

  it("should display correct policy card information", () => {
    // Check no-show policies
    cy.get(".ant-card").each(($card, index) => {
      const policy =
        index < policies.noShowPolicies.length
          ? policies.noShowPolicies[index]
          : policies.cancellationPolicies[
              index - policies.noShowPolicies.length
            ];

      cy.wrap($card).within(() => {
        // Check card title
        cy.get(".ant-card-head-title").contains(policy.name).should("exist");

        // Check form items
        cy.contains(policy.description).should("exist");
        cy.contains(
          `${policy.amount}${policy.chargeType === "percentage" ? "%" : "€"}`
        ).should("exist");

        // Check edit button exists
        cy.get("button").should("exist");
      });
    });
  });

  it("should allow editing a policy card", () => {
    cy.get(".ant-card")
      .first()
      .within(() => {
        // Store initial value
        cy.get(".ant-tag")
          .invoke("text")
          .then((initialValue) => {
            // Click edit button
            cy.get("button").click();

            // Wait for form to be in edit mode
            cy.get("input[type='number']").should("exist");

            // Edit amount
            cy.get("input[type='number']").clear().type("75");

            // Save changes
            cy.get("button").click();

            // Wait for value to update and be different from initial
            cy.get(".ant-tag")
              .should("exist")
              .invoke("text")
              .should("not.eq", initialValue)
              .and("include", "75");
          });
      });
  });

  it("should allow changing charge type", () => {
    cy.get(".ant-card")
      .first()
      .within(() => {
        // Store initial value
        cy.get(".ant-tag")
          .invoke("text")
          .then((initialValue) => {
            // Click edit button
            cy.get("button").click();

            // Wait for form to be in edit mode
            cy.get(".ant-select").should("exist");

            // Open select
            cy.get(".ant-select").click();
          });
      });

    // Select option from dropdown
    cy.get(".ant-select-dropdown")
      .should("be.visible")
      .contains("Fixed")
      .click();

    cy.get(".ant-card")
      .first()
      .within(() => {
        cy.get("button").click();

        // Wait for value to update
        cy.get(".ant-tag")
          .should("exist")
          .invoke("text")
          .should("include", "€");
      });
  });
});
