describe("payment", () => {
  it("user can make payment", () => {
    // login
    cy.visit("/");
    cy.findByRole("textbox", { name: /username/i }).type("johndoe");
    cy.findByLabelText(/password/i).type("s3cret");
    cy.findByRole("checkbox", { name: /remember me/i }).check();
    cy.findByRole("button", { name: /sign in/i }).click();

    // check balance
    // click new
    // search for user
    // insert amount and note
    // click pay
    // return to transactions
    // verify if payment made
    // verify if payment amount was deducted
  });
});
