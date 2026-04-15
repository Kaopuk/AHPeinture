import Hero from "@/components/Hero/Hero";
import styles from "./page.module.css";

export default function Home() {
  const services = [
    { title: "Ravalement de façade", description: "Redonnez vie à vos murs extérieurs avec nos solutions de ravalement professionnelles." },
    { title: "Revêtements muraux", description: "Peinture, papier peint et finitions décoratives pour sublimer vos espaces intérieurs." },
    { title: "Petits travaux", description: "Bricolage, retouches et finitions pour tous les recoins de votre maison." },
    { title: "Intervention après sinistres", description: "Remise en état rapide et soignée après dégâts des eaux ou autres sinistres." }
  ];

  return (
    <div className={styles.page}>
      <Hero />
      
      <section className={styles.edito}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.sectionTitle}>Votre partenaire confiance</h2>
            <p className={styles.sectionSubtitle}>Plus qu'un simple coup de pinceau, une transformation complète.</p>
          </div>
          
          <div className={styles.content}>
            <div className={styles.textSide}>
              <p>
                Bienvenue chez <strong>AH PEINTURE</strong>. Fort d'une expertise reconnue dans le domaine du bâtiment, 
                Alexandre Hodier vous accompagne dans tous vos projets de construction et de rénovation à Béziers et ses alentours. 
              </p>
              <p>
                Nous mettons un point d'honneur à utiliser des matériaux de haute qualité pour garantir 
                un résultat durable et esthétique. Que vous soyez un particulier ou un professionnel, 
                notre équipe s'adapte à vos besoins spécifiques avec rigueur et professionnalisme.
              </p>
            </div>
          </div>
          
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={`${styles.serviceCard} shine`}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.banner}>
        <div className={styles.bannerContent}>
          <h2>Prêt à lancer votre projet ?</h2>
          <p>Discutons de vos idées et réalisons un devis sur mesure adapté à votre budget.</p>
          <a href="/contact" className={styles.bannerCta}>Démarrer maintenant</a>
        </div>
      </section>
    </div>
  );
}
