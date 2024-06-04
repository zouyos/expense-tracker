import { ExpenseInput } from "containers/ExpenseInput/ExpenseInput";
import style from "./style.module.css";
import { List } from "components/List/List";
import { useDispatch, useSelector } from "react-redux";
import { IncomeInput } from "containers/IncomeInput/IncomeInput";
import { TotalExpense } from "containers/TotalExpense/TotalExpense";
import { Logo } from "components/Logo/Logo";
import { deleteAll } from "store/expense/expense-slice";
import image from "assets/images/logo.jpg";

export function App() {
  const dispatch = useDispatch();
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);

  function clearAll() {
    if (window.confirm("Supprimer toutes les dépenses ?")) {
      dispatch(deleteAll());
    }
  }

  return (
    <div className={style.main_container}>
      <div className={style.header}>
        <div>
          <Logo image={image} title='ISpent' subtitle='Track your expenses' />
        </div>
        <div className={style.income_input}>
          <IncomeInput />
        </div>
      </div>
      <div className={`row ${style.workspace}`}>
        <div className={`col-12 ${style.expense_input}`}>
          <ExpenseInput />
        </div>
        <div className={`col-11 col-md-6 col-lg-4 ${style.expense_list}`}>
          <List items={expenseList} />
        </div>
        <div className={`col-12 col-md-6 col-lg-4 ${style.expense_total}`}>
          <TotalExpense />
          <button
            className={`btn btn-danger my-2 ${style.btn}`}
            disabled={expenseList.length === 0}
            onClick={clearAll}
          >
            Clear Expenses
          </button>
        </div>
      </div>
    </div>
  );
}
