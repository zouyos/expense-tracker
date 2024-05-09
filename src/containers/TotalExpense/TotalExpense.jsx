import { useSelector } from "react-redux";
import style from "./style.module.css";

export function TotalExpense() {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  const income = useSelector((store) => store.EXPENSE.income);

  const totalExpense = expenseList.reduce((acc, i) => {
    return parseFloat((acc + i.price).toFixed(2));
  }, 0);
  const remainingMoney = parseFloat((income - totalExpense).toFixed(2));

  return (
    <div>
      <div className="row my-2">
        <div className={`col ${style.label}`}>Total expenses</div>
        <div className={`col ${style.amount}`}>{totalExpense} €</div>
      </div>
      <div className="row my-2">
        <div className={`col ${style.label}`}>Remaining money</div>
        <div className={`col ${style.amount}`}>{remainingMoney} €</div>
      </div>
    </div>
  );
}
