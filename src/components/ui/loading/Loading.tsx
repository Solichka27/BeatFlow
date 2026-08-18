import styles from './Loading.module.scss';

function Loading() {
    return (
        <div className={styles.container}>
            <h1 className={styles.code}>
                Loading
            </h1>

            <h2 className={styles.title}>
                Page not found
            </h2>

            <p className={styles.description}>
                The page you are looking for doesn't exist or has been moved.
            </p>

            <button className={styles.button}>
                Go Home
            </button>
        </div>
    );
}

export default Loading;