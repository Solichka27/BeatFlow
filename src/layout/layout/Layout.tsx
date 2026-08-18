import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';

function Layout() {
    return (
        <div className={styles.layout}>
            <Header />

            <main className={styles.content}>
                <Sidebar />
                <section className={styles.page}>
                    <Outlet />
                </section>

            </main>
        </div>
    )
}

export default Layout;