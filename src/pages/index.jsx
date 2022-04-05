import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation } from 'next-i18next';

import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common');

  return (
    <div className={styles.container}>
      <Head>
        <title>i18n test</title>
      </Head>

      <div className={styles.main}>
        <h1>{t('welcome')}</h1>

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

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}