import style from "./style.module.css";

export function Logo({ image, title, subtitle }) {
  return (
    <>
      <div className={style.container}>
        {image && <img className={style.img} src={image} alt="logo" />}
        <h1 className={style.title}>{title}</h1>
      </div>
      <h2 className={style.subtitle}>{subtitle}</h2>
    </>
  );
}
