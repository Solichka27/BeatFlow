import styles from './EmptyState.module.scss';

interface EmptyStateProps {
    title?: string;
    description?: string;
}

function EmptyState({
    title = 'Nothing found',
    description = 'Try another search.',
}: EmptyStateProps) {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>🎵</div>

            <h2 className={styles.title}>
                {title}
            </h2>

            <p className={styles.description}>
                {description}
            </p>
        </div>
    );
}

export default EmptyState;