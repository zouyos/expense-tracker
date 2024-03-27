import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import { setIncome } from "store/expense/expense-slice";

export function IncomeInput(props) {
  const dispatch = useDispatch();
  const income = useSelector((store) => store.EXPENSE.income);

  function updateIncome(e) {
    const income = e.target.value;
    dispatch(setIncome(income));
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
        />
      </div>
    </div>
  );
}
