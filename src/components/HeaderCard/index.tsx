import styles from "./styles.module.scss";

export function HeaderCard() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.textWrapper}>
        <h1>CORRIDA DA VACINA</h1>
        <p>
          Visualize a evolução percentual de pessoas que já tomaram a primeira
          dose da vacina no seu estado.
        </p>
      </div>
      <img className={styles.imgSplash} src="/splash.svg" alt="splash"></img>

      <div className={styles.imgWrapper}>
        <img
          className={styles.imgWoman}
          src="/woman-running.svg"
          alt="woman"
        ></img>
      </div>
    </div>
  );
}
