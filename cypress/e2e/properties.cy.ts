describe("Properties Page", () => {
  beforeEach(() => {
    cy.visit("/");

    // Wait for loading state to finish
    cy.get(".ant-spin").should("not.exist");

    // Wait for table to load with data
    cy.get(".ant-table-tbody tr").should("exist");
  });

  it("should display properties table with correct structure", () => {
    // Check page title
    cy.get("h1").should("contain", "Properties");

    // Check table headers
    cy.get(".ant-table-thead th").should("have.length", 3);
    cy.get(".ant-table-thead th").eq(0).should("contain", "Id");
    cy.get(".ant-table-thead th").eq(1).should("contain", "Name");
    cy.get(".ant-table-thead th").eq(2).should("contain", "Actions");
  });

  it("should navigate to property details when clicking view button", () => {
    // Get the first data row (excluding measure row)
    cy.get(".ant-table-tbody tr:not(.ant-table-measure-row)")
      .first()
      .then(($row) => {
        // Get the ID from the first cell
        const id = $row.find("td").first().text().trim();

        // Find and click the View button in the last cell
        cy.wrap($row).find("td").last().find("button").click();

        // Check URL
        cy.url().should("include", `/property/${id}`);
      });
  });
});
