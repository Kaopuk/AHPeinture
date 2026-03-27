import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoCrop}>
                        <Image 
                            src="/logo-insta.jpg" 
                            alt="AH PEINTURE Logo" 
                            width={110} 
                            height={110} 
                            className={styles.logoImg}
                            priority
                        />
                    </div>
                </Link>


                <ul className={styles.navLinks}>
                    <li><Link href="/">Accueil</Link></li>
                    <li><Link href="/realisations">Réalisations</Link></li>
                    <li>
                        <a href="https://instagram.com/a.h.peinture" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                    </li>
                    <li><Link href="/contact" className={styles.cta}>Demander un devis</Link></li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;
