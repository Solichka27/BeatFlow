import styles from './SearchBar.module.scss';
import { Search } from 'lucide-react';


interface SearchBarProps {
    placeholder: string;
}

function SearchBar({ placeholder }: SearchBarProps) {
    return (
        <div className={styles.searchContainer}>
            <Search className={styles.searchIcon} size={20} />

            <input
                className={styles.inputSearch}
                type="text"
                placeholder={placeholder}
            />
        </div>
    );
}

export default SearchBar;