import styles from "./page.module.css";
export default function Resultats() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.title}>
          <h1>ISchoolVote : </h1>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="/Resultats">Résultats</a></li>
          </ul>
        </nav>
      </header>
      </div>
      );
}
