import styles from './ErrorState.module.scss';

interface ErrorStateProps {
    title?: string;
    description?: string;
}

function ErrorState({
    title = 'Oops!',
    description = 'Something went wrong. Please try again.',
}: ErrorStateProps) {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>⚠️</div>

            <h2 className={styles.title}>
                {title}
            </h2>

            <p className={styles.description}>
                {description}
            </p>
        </div>
    );
}

export default ErrorState;