import { useTrendingAlbums } from '../../../../hooks/useTrendingAlbums';

import MusicCard from '../../../../components/ui/card/MusicCard';
import ErrorState from '../../../../components/ui/error-state/ErrorState';
import EmptyState from '../../../../components/ui/empty-state/EmptyState';
import styles from './AlbumSection.module.scss';
import SkeletonGrid from '../../../../components/ui/skeleton/SkeletonGrid';

function AlbumSection() {

    const {
        data: albums,
        isLoading,
        error,
    } = useTrendingAlbums();

    if (isLoading) {
        return <SkeletonGrid />;
    }

    if (error) {
        return <ErrorState />;
    }

    if (!albums?.length) {
        return <EmptyState />;
    }

    return (
        <section className={styles.section}>

            <div className={styles.header}>
                <h2 className={styles.title}>
                    Trending Albums
                </h2>

                <button className={styles.seeAll}>
                    See all
                </button>
            </div>

            <div className={styles.grid}>
                {albums.map((album) => (
                    <MusicCard
                        key={album.id}
                        album={album}
                    />
                ))}
            </div>

        </section>
    );
}

export default AlbumSection;