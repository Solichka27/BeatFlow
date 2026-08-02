import styles from './Header.module.scss'
import { Bell, Moon, User } from 'lucide-react';
import SearchBar from '../../components/ui/searchBar/SearchBar';
import IconButtton from '../../components/ui/button/iconButton/IconButton';
function Header() {
    return (
        <header className={styles.header}>
            <h2 className={styles.headerTitle}>Home</h2>

            <div className={styles.search}>
                <SearchBar placeholder='Search artists, songs...' />
            </div>

            <div className={styles.actions}>
                <IconButtton>
                    <Moon size={20} />
                </IconButtton>

                <IconButtton>
                    <Bell size={20} />
                </IconButtton>

                <IconButtton>
                    <User size={20} />
                </IconButtton>

            </div>
        </header>
    )
}

export default Header;