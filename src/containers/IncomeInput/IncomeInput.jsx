import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import { setIncome } from "store/expense/expense-slice";
import { useState } from "react";

export function IncomeInput() {
  const dispatch = useDispatch();
  const income = useSelector((store) => store.EXPENSE.income);
  const [value, setValue] = useState(income);

  function updateIncome(e) {
    let inputValue = e.target.value === "" ? 0 : e.target.value;
    const regex = /^\d*\.?\d{0,2}$/;
    if (!regex.test(inputValue)) {
      inputValue = inputValue.slice(0, -1);
    }
    setValue(parseFloat(inputValue));
    dispatch(setIncome(inputValue));
  }

  return (
    <div className="row justify-content-center mb-4">
      <div className={`col-sm-12 col-md-6 ms-auto mb-2 me-2 ${style.label}`}>
        Income
      </div>
      <div className={`col-sm-12 col-md-6 ms-auto text-right ${style.input}`}>
        <input
          onChange={updateIncome}
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
          value={value}
          data-testid="incomeInput"
        />
      </div>
    </div>
  );
}
