import { ListItem } from "../ListItem/ListItem";
import style from "./style.module.css";

export function List({ items }) {
  return (
    <div className={style.container}>
      <table className="table table-hover table-borderless">
        <tbody>
          {items.map((item) => {
            return <ListItem key={item.id} item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
