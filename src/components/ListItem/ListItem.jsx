import style from "./style.module.css";
import { XSquareFill } from "react-bootstrap-icons";

export function ListItem({ item, onTrashClick, index }) {
  return (
    <tr>
      <td>
        <XSquareFill
          onClick={() => onTrashClick(index)}
          style={{ cursor: "pointer" }}
        />
      </td>
      <th>{item.name}</th>
      <td className={style.price}>{item.price} €</td>
    </tr>
  );
}
