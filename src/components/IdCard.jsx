import styles from "./IdCard.module.css";

export function IdCard(props) {
  return (
    <div className={styles.container}>
      <img src={props.picture} alt="Profile picture" />
      <div className={styles.infos}>
        <p>First name: <span>{props.firstName}</span></p>
        <p>Last name: <span>{props.lastName}</span></p>
        <p>Height: <span>{props.height / 100}m</span></p>
        <p>Gender: <span>{props.gender}</span></p>
        <p>Birth: <span>{props.birth.toDateString()}</span></p>
      </div>
    </div>
  );
}
