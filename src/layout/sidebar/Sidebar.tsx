import { House, Compass, Heart } from 'lucide-react';
import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';
function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <span className={styles.logoIcon}>🎵</span>
                <h2 className={styles.logoTitle}>BeatFlow</h2>
            </div>

            <nav className={styles.navigation}>
                <ul className={styles.navList}>
                    <NavLink to='/' className={({ isActive }) => isActive ? styles.active : styles.link}>
                        <House size={20} />
                        <span>Home</span>
                    </NavLink>

                    <NavLink to='/search' className={({ isActive }) => isActive ? styles.active : styles.link}>
                        <Compass size={20} />
                        <span>Search</span>
                    </NavLink>

                    <NavLink to='/favorites' className={({ isActive }) => isActive ? styles.active : styles.link}>
                        <Heart size={20} />
                        <span>Favorites</span>
                    </NavLink>


                </ul>
            </nav>

            <div className={styles.footer}>
                BeatFlow v1.0
            </div>
        </aside>
    );
}

export default Sidebar;