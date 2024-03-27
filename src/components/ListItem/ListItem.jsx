import { useDispatch } from "react-redux";
import style from "./style.module.css";
import { deleteExpense } from "store/expense/expense-slice";
import { XSquareFill } from "react-bootstrap-icons";

export function ListItem({ item }) {
  const dispatch = useDispatch();

  function removeItem(id) {
    dispatch(deleteExpense(id));
  }

  return (
    <tr>
      <td>
        <XSquareFill
          onClick={() => removeItem(item.id)}
          style={{ cursor: "pointer" }}
        />
      </td>
      <th>{item.name}</th>
      <td className={style.price}>{item.price} €</td>
    </tr>
  );
}
