import { House, Compass, Heart } from 'lucide-react';
import styles from './Sidebar.module.scss';

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <span className={styles.logoIcon}>🎵</span>
                <h2 className={styles.logoTitle}>BeatFlow</h2>
            </div>

            <nav className={styles.navigation}>
                <ul className={styles.navList}>
                    <li className={`${styles.navItem} ${styles.active}`}>
                        <House size={20} />
                        <span>Home</span>
                    </li>

                    <li className={styles.navItem}>
                        <Compass size={20} />
                        <span>Discover</span>
                    </li>

                    <li className={styles.navItem}>
                        <Heart size={20} />
                        <span>Favorites</span>
                    </li>
                </ul>
            </nav>

            <div className={styles.footer}>
                BeatFlow v1.0
            </div>
        </aside>
    );
}

export default Sidebar;