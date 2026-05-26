import styles from "./DriverCard.module.css";
export function DriverCard(props) {
  const ratings = {
    0: "☆☆☆☆☆",
    1: "★☆☆☆☆",
    2: "★★☆☆☆",
    3: "★★★☆☆",
    4: "★★★★☆",
    5: "★★★★★",
  };
  const ratingValue = Math.round(props.rating);
  const bgImg = {
    background: `center / cover no-repeat url(${props.img}) white`,
  };
  return (
    <div className={styles.card}>
      <div className={styles.grid}>
        <div className={styles.imgContainer} style={bgImg}></div>
        <h2>{props.name}</h2>
        <span id={styles.rating}>{ratings[ratingValue]}</span>
        <p>
          {props.car["model"]} - {props.car["licensePlate"]}
        </p>
      </div>
    </div>
  );
}
