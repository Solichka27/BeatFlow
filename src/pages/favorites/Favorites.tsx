import { useFavoritesStore } from '../../store/favoritesStore';

import MusicCard from '../../components/ui/card/MusicCard';
import EmptyState from '../../components/ui/empty-state/EmptyState';

import styles from './Favorites.module.scss';

function Favorites() {

    const favorites = useFavoritesStore(
        (state) => state.favorites
    );
    if (favorites.length === 0) {
        return (
            <EmptyState
                title="No favorites yet"
                description="Save your favorite albums to see them here."
            />
        );
    }

    return (
        <section className={styles.section}>

            <h1>Favorites</h1>

            <div className={styles.grid}>
                {favorites.map((album) => (
                    <MusicCard
                        key={album.id}
                        album={album}
                    />
                ))}
            </div>

        </section>
    );
}

export default Favorites;