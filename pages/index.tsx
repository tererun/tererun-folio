import type { NextPage } from 'next'
import React from "react";

import styles from '../styles/Home.module.css'

import Head from 'next/head'
import TererunIcon from "../features/TererunIcon/components/TererunIcon";

const Home: NextPage = () => {
  return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="tererun Portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <TererunIcon />
        </main>
      </div>
  )
}

export default Home
