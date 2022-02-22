import Head from 'next/head';

import Header from '../Header';
import Footer from '../Footer';

import styles from './Layout.module.css';

export default function Layout(props) {
    const { children, pageTitle } = props;
    return (
        <>
            <Head>
                <title>Next JS Basic |
                    {pageTitle}
                </title>
                <meta name='description' content='Web belajar next js' />
            </Head>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>
                    {props.children}
                </div>
                <Footer />
            </div>
        </>
    );
}
