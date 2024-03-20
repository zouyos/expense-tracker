import style from "./style.module.css";

export default function FieldError({ msg }) {
  return <span className={`${style.container} text-wrap`}>{msg}</span>;
}
