import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import ServiceMap from './ServiceMap';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <Image
                            src="/logo-insta.jpg"
                            alt="AH PEINTURE"
                            width={160}
                            height={160}
                            className={styles.footerLogo}
                        />

                        <p className={styles.name}>Artisan Peintre Rénovateur</p>
                        <p>Construction & Rénovation</p>
                        <p>Par Alexandre Hodier</p>
                    </div>


                    <div className={styles.contact}>
                        <h4>Contact</h4>
                        <p>📞 06 61 89 05 02</p>
                        <p>✉️ alexandre.hodier@sfr.fr</p>
                        <div className={styles.socials}>
                            <a href="https://instagram.com/a.h.peinture" target="_blank" rel="noopener noreferrer">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                <span>@a.h.peinture</span>
                            </a>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <h4>Navigation</h4>
                        <Link href="/">Accueil</Link>
                        <Link href="/realisations">Réalisations</Link>
                        <Link href="/contact">Devis</Link>
                    </div>

                    <div className={styles.mapContainer}>
                        <h4>Zone d'intervention</h4>
                        <ServiceMap />
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} AH PEINTURE. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
