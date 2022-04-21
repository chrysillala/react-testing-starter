import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

// this one should failed because we want the pay button to be disabled
// but it passed
// why this happened?
// when you go to new transaction > select contact
// you can see for a fraction of time the button is enabled
// this happens because we use formik
// test("on initial render, the pay button should be disabled - falsy", () => {
//   render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);
//   expect(screen.getByRole("button", { name: /pay/i })).toBeEnabled();
// });

// we need async await to fix the falsy passed test above
// and screen.findByRole
test("on initial render, the pay button should be disabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

test("if amount and note are entered, the pay button becomes enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
