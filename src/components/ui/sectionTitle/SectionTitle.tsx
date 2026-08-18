import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
}

function SectionTitle({ title, subtitle }: SectionTitleProps) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {title}
            </h2>
            {
                subtitle && (
                    <p className={styles.subtitle}>
                        {subtitle}
                    </p>
                )
            }

        </div>

    )

}

export default SectionTitle;