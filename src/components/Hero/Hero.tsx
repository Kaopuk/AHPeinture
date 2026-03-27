import styles from './Hero.module.css';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h2 className={styles.subtitle}>Construction & Rénovation</h2>
                <h1 className={styles.title}>
                    <span className={styles.gold}>Artisan Peintre</span>
                    <br />
                    <span className={styles.white}>Rénovateur</span>
                </h1>
                <p className={styles.description}>
                    Donnez vie à vos projets avec une expertise professionnelle.
                    Qualité, rigueur et finitions d'exception pour votre intérieur et extérieur.
                </p>

                <div className={styles.actions}>
                    <Link href="/contact" className={styles.primaryBtn}>
                        Obtenir un devis gratuit
                    </Link>
                    <Link href="/realisations" className={styles.secondaryBtn}>
                        Voir nos réalisations
                    </Link>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <span></span>
                <div className={styles.line}></div>
            </div>
        </section>
    );
};

export default Hero;
