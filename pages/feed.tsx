import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Chart from '../components/Chart'

export default function Feed() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Feeding</title>
                <meta name="description" content="Taylor Feeding" />
            </Head>
            <h1>Taylor Feeding</h1>
            <div>
                <Chart></Chart>
            </div>
        </div>
    )
}