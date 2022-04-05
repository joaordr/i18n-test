import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { LanguageContext } from '../contexts/LanguageContext';
import { useContext } from 'react';

export default function Home() {
  const { router, locale, translations } = useContext(LanguageContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>i18n test</title>
      </Head>

      <div className={styles.main}>
        <h1>{translations.welcome}</h1>
        <div className="select">
          <select
            value={locale}
            onChange={(e) => { router.push('/', null, { locale: e.target.value }) }}
          >
            <option value="en">Ingles</option>
            <option value="pt">Portugues</option>
          </select>
        </div>
      </div>

    </div>
  )
}