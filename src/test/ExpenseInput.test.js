import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "store";
import { ExpenseInput } from "containers/ExpenseInput/ExpenseInput";

describe("<ExpenseInput />", () => {
  it("prevents price input from exceeding 2 decimals", () => {
    render(
      <Provider store={store}>
        <ExpenseInput />
      </Provider>
    );
    const priceInput = screen.getByTestId("price-input");
    fireEvent.change(priceInput, { target: { value: 3.456 } });
    expect(priceInput.value).toBe("3.45");
  });

  it("keeps the add button disabled on form errors", () => {
    render(
      <Provider store={store}>
        <ExpenseInput />
      </Provider>
    );
    const nameInput = screen.getByTestId("name-input");
    const priceInput = screen.getByTestId("price-input");
    const button = screen.getByRole("button");
    fireEvent.change(nameInput, { target: { value: "a" } });
    fireEvent.change(priceInput, { target: { value: 0 } });
    expect(button).toHaveProperty("disabled", true);
  });
});
