import type { ReactNode } from 'react';

import styles from './IconButton.module.scss';

interface IconButtonProps {
    children: ReactNode;
    onClick?: () => void;
}

function IconButtton({
    children,
    onClick,
}: IconButtonProps) {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    )
}

export default IconButtton;