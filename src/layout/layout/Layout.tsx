import Home from "../../pages/home/Home";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

import styles from './Layout.module.scss';

function Layout() {
    return (
        <div className={styles.layout}>
            <Header />

            <main className={styles.content}>
                <Sidebar />
                <section className={styles.page}>
                    <Home />
                </section>

            </main>
        </div>
    )
}

export default Layout;