import styles from "./page.module.css";

export default function Home() {
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

      <main className={styles.content}>
        <section className={styles.intro}>
          <p> ...oooooh... </p>
          <h2>Bienvenue sur ISchoolVote</h2>
          <p>Participez à nos sondages et votez pour les meilleures idées !</p>
        </section>
        <section className={styles.about}>
          <h2>À propos de notre projet</h2>
          <p>ISchoolVote est une plateforme de vote conçue pour les étudiants, les enseignants et le personnel administratif. Avec les reponse sur ce site internet.

          <p>Notre projet émerge dans un contexte où le ministère de l'Éducation exprime un intérêt croissant pour le renforcement de la démocratie participative au sein des lycées.  
          Le ministère de l'Éducation a récemment manifesté son engagement en faveur de la création de Conseils de Vie Lycéenne (CVL) dans tous les établissements. Cette volonté de renforcer la participation des lycéens dans les prises de décision est une opportunité que nous saisissons. </p>
          </p>
          <p>Au sein de notre lycée, nous sommes convaincus que les lycéens ont un rôle crucial à jouer dans les décisions qui affectent leur quotidien éducatif. Afin de renforcer leur participation active et de favoriser une véritable démocratie au sein de notre établissement, nous avons élaboré un projet novateur : l'instauration d'une boîte de vote numériques. </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 ISchoolVote. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
