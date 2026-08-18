import styles from "./MusicCard.module.scss"
import { Heart, Play } from 'lucide-react';
import { useFavoritesStore } from "../../../store/FavoritesStore";
import IconButton from "../button/iconButton/IconButton";
import type { Album } from '../../../types/album'
interface MusicCardProps {
    album: Album;
}
function MusicCard({
    album }: MusicCardProps) {
    const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

    const isFavorite = useFavoritesStore((state) => state.isFavorite(album.id));
    return (
        <article className={styles.card}>
            <img src={album.cover} alt={album.title} className={styles.cover} />

            <div className={styles.info}>
                <h3 className={styles.title}>
                    {album.title}
                </h3>

                <p className={styles.artist}>
                    {album.artist.name}
                </p>
            </div>


            <div className={styles.actions}>
                <IconButton onClick={() => toggleFavorite(album)}>
                    <Heart size={18} className={
                        isFavorite
                            ? styles.favoriteActive
                            : styles.favoriteButton
                    } />
                </IconButton>
                <IconButton>
                    <Play size={18} />
                </IconButton>
            </div>
        </article>
    );
}

export default MusicCard;