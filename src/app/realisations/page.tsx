import styles from './realisations.module.css';
import projectsData from '@/data/realisations.json';
import InstagramFeed from '@/components/InstagramFeed/InstagramFeed';


export default function Realisations() {
  const projects = projectsData;


  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1>Nos Réalisations</h1>
          <p>Découvrez une sélection de nos projets les plus marquants.</p>
        </div>
      </header>

      <section className={styles.gallery}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Derniers Projets</h2>
            <p>Suivez-nous sur le terrain en temps réel.</p>
          </div>
          <InstagramFeed widgetId="11593d51-7c17-4f82-a90a-1c44003c7d51" />
          <div className={styles.divider}></div>

          {/* <div className={styles.sectionHeader}>
            <h2>Archives & Sélections</h2>
          </div>
          <div className={styles.grid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.imageContainer}>
                  {project.image ? (
                    <img src={project.image} alt={project.title} className={styles.projectImage} />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <span>Projet #{index + 1}</span>
                    </div>
                  )}
                </div>
                <div className={styles.info}>
                  <span className={styles.category}>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

    </div>
  );
}
