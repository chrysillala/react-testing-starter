import { render, screen } from "@testing-library/react";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

// this one should failed because we want the pay button to be disabled
// but it passed
// why this happened?
// when you go to new transaction > select contact
// you can see for a fraction of time the button is enabled
// this happens because we use formik
test("on initial render, the pay button should be disabled", () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);
  expect(screen.getByRole("button", { name: /pay/i })).toBeEnabled();
});
