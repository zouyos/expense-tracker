import { render, screen, fireEvent } from "@testing-library/react";
import { IncomeInput } from "containers/IncomeInput/IncomeInput";
import { Provider } from "react-redux";
import { store } from "store";

describe("<IncomeInput />", () => {
  it("prevents income input from exceeding 2 decimals", () => {
    render(
      <Provider store={store}>
        <IncomeInput />
      </Provider>
    );
    const input = screen.getByTestId("incomeInput");
    fireEvent.change(input, { target: { value: 300.255 } });
    expect(input.value).toBe("300.25");
  });

  it("sets value to 0 when empty", () => {
    render(
      <Provider store={store}>
        <IncomeInput />
      </Provider>
    );
    const input = screen.getByTestId("incomeInput");
    fireEvent.change(input, { target: { value: "" } });
    expect(input.value).toBe("0");
  });
});
