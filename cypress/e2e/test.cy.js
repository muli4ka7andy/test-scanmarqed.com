describe("Marketing Tracker login screen test", () => {
  it("should navigate to Marketing Tracker login screen", () => {
    cy.visit("https://www.google.com");
    cy.get('input[name="q"]').type("marketingtracker.nl{enter}");
    cy.contains("https://resources.scanmarqed.com/login").should("not.exist");
  });
  it("should not allow common logins", () => {
    cy.on("uncaught:exception", (error) => {
      console.log(
        "An error occurred while navigating to the login page:",
        error
      );
      return false;
    });
    cy.window().then((win) => {
      win.location.href = "https://resources.scanmarqed.com/login";
      cy.get('input[name="loginName"]', { timeout: 10000 })
        .should("be.visible")
        .type("admin@admin.com");
      cy.get('input[name="password"]').should("be.visible").type("password");
      cy.get('input[type="submit"]').click();
      cy.get(".alert.alert--error.alert--icon.milli")
        .should("be.visible")
        .contains("Invalid email or password.");
    });
  });
});
