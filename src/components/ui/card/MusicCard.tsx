import styles from "./MusicCard.module.scss"
import { Heart, Play } from 'lucide-react';
import IconButton from "../button/iconButton/IconButton";
interface MusicCardProps {
    id: number;
    title: string;
    artist: string;
    cover: string;
}
function MusicCard({
    title,
    artist,
    cover, }: MusicCardProps) {
    return (
        <article className={styles.card}>
            <img src={cover} alt={title} className={styles.cover} />

            <div className={styles.info}>
                <h3 className={styles.title}>
                    {title}
                </h3>

                <p className={styles.artist}>
                    {artist}
                </p>
            </div>


            <div className={styles.actions}>
                <IconButton>
                    <Heart size={18} />
                </IconButton>
                <IconButton>
                    <Play size={18} />
                </IconButton>
            </div>
        </article>
    );
}

export default MusicCard;