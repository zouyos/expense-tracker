import { useDispatch, useSelector } from "react-redux";
import { ListItem } from "../ListItem/ListItem";
import { setExpenseList } from "store/expense/expense-slice";

export function List({ items }) {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  const dispatch = useDispatch();

  function deleteExpense(index) {
    const updatedExpenseList = expenseList.filter((item, i) => {
      return i !== index;
    });
    dispatch(setExpenseList(updatedExpenseList));
  }

  return (
    <div>
      <table className="table table-hover table-borderless">
        <tbody>
          {items.map((item, index) => {
            return (
              <ListItem
                key={item.name + index}
                item={item}
                onTrashClick={deleteExpense}
                index={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
