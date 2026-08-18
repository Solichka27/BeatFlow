import SkeletonCard from '../skeleton/SkeletonCard';

import styles from './SkeletonGrid.module.scss';

function SkeletonGrid() {

    return (
        <div className={styles.grid}>
            {Array.from({ length: 8 }).map((_, index) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    );
}

export default SkeletonGrid;