import { useSelector } from "react-redux";
import style from "./style.module.css";

export function TotalExpense(props) {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  const income = useSelector((store) => store.EXPENSE.income);

  const totalExpense = expenseList.reduce((acc, i) => {
    return acc + i.price;
  }, 0);
  const remainingMoney = income - totalExpense;

  return (
    <div>
      <div className="row">
        <div className={`col ${style.label}`}>Total expenses</div>
        <div className={`col ${style.amount}`}>{totalExpense} €</div>
      </div>
      <div className="row">
        <div className={`col ${style.label}`}>Remaining money</div>
        <div className={`col ${style.amount}`}>{remainingMoney} €</div>
      </div>
    </div>
  );
}
