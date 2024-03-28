import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import { setIncome } from "store/expense/expense-slice";
import { useState } from "react";

export function IncomeInput() {
  const dispatch = useDispatch();
  const income = useSelector((store) => store.EXPENSE.income);
  const [value, setValue] = useState(income);

  function updateIncome(e) {
    const inputValue = e.target.value;
    const regex = /^\d*\.?\d{0,2}$/;
    if (inputValue === "" || regex.test(inputValue)) {
      setValue(parseFloat(inputValue));
      dispatch(setIncome(inputValue === "" ? 0 : inputValue));
    }
  }

  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-sm-12 col-md-6 ms-auto ${style.label}`}>Income</div>
      <div className={`col-sm-12 col-md-6 ms-auto text-right ${style.input}`}>
        <input
          onChange={updateIncome}
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
          defaultValue={income}
          value={value}
        />
      </div>
    </div>
  );
}
