import { ListItem } from "../ListItem/ListItem";
import style from "./style.module.css";

export function List({ items }) {
  return (
    <div style={{ overflowY: "scroll", height: "40%" }}>
      <table className="table table-hover table-borderless">
        <tbody className={style.container}>
          {items.map((item, index) => {
            return <ListItem key={item.name + index} item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
