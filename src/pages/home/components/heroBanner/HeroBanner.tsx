import { Heart, Play } from 'lucide-react';
import styles from './HeroBanner.module.scss';
import IconButton from '../../../../components/ui/button/iconButton/IconButton';

function HeroBanner() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}>
                <span className={styles.badge}>
                    Featured Album
                </span>

                <h1 className={styles.title}>
                    Random Access Memories
                </h1>
                <p className={styles.artist}>
                    Daft Punk
                </p>

                <div className={styles.actions}>
                    <button className={styles.playButton}>
                        <Play size={20} />
                    </button>

                    <IconButton>
                        <Heart size={20} />
                    </IconButton>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner;