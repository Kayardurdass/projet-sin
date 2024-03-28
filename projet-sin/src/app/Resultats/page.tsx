import dynamic from 'next/dynamic'; // Import dynamique pour Chart.js
import 'chart.js/auto'; // Import de Chart.js
import styles from "./page.module.css"; // Import des styles CSS de votre composant
import { useEffect, useRef } from 'react'; // Importez useRef depuis React

const Chart = dynamic(() => import('chart.js/auto'), { ssr: false });

// Définition du composant Resultats
export default function Resultats() {
    // Référence au canvas utilisé pour le graphique
    const chartRef = useRef(null);
  
    // Effet de côté pour créer le graphique lors du montage du composant
    useEffect(() => {
      // Données pour le graphique (exemple)
      const labels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'];
      const data = {
        labels: labels,


        datasets: [{
          label: 'Ventes mensuelles',
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          data: [10, 20, 30, 25, 15] // Exemple de données
        }]
      };
  
      // Options du graphique
      const options = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };
  
      // Création du graphique à colonnes
      const ctx = chartRef.current.getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
      });
  
      // Assurez-vous de détruire le graphique lorsque le composant est démonté
      return () => myChart.destroy();
    }, []); // Le tableau vide indique que cet effet s'exécute une seule fois lors du montage
  
    // Rendu du composant
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.title}>
            <h1>ISchoolVote : </h1>
          </div>
          <nav className={styles.nav}>
            <ul>
              <li><a href="/">menu</a></li>
            </ul>
          </nav>
        </header>
  
        <main className={styles.content}>
          <section className={styles.intro}>
            <p> ...oooooh... </p>
            <h2>Resulta d'est sondage</h2>
          </section>
          <section className={styles.about}>
            {/* Utilisez cet élément canvas pour le graphique */}
            <canvas ref={chartRef} width="400" height="400"></canvas>
          </section>
        </main>
  
        <footer className={styles.footer}>
          <p>&copy; 2024 ISchoolVote. Tous droits réservés.</p>
        </footer>
      </div>
    );
  }
  
  // Marquez le composant pour un rendu côté client
  Resultats.useClient = true;
