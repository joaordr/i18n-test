import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>i18n test</title>
      </Head>

      <div className={styles.main}>
        <h1>Teste</h1>

        <div className="select">
          <select
            onChange={(e) => { }}
          >
            <option value="en">Ingles</option>
            <option value="pt">Portugues</option>
          </select>
        </div>
      </div>

    </div>
  )
}
