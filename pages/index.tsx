import Head from "next/head";
import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";

function Home() {
  useEffect(() => {
    console.log(process.env.GOOGLE_ANALYTICS_TRACKING_ID);
  });

  return (
    <div className={styles.container}>
      <div>
        <Head>
          <title>A Corrida da Vacina</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Corrida da <span className={styles.span}>Vacina!</span>
          </h1>
          <div className={styles.subtitle}>
            Visualize a evolução percentual de pessoas que já tomaram a primeira
            dose da vacina no seu estado.
          </div>

          <div className={styles.background}></div>

          <div className={styles.flourishTest}>
            <iframe
              src="https://flo.uri.sh/visualisation/5964566/embed"
              title="Interactive or visual content"
              frameBorder="0"
              scrolling="no"
              className={styles.flourishContainer}
              sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
            ></iframe>
            <div
              className={
                "width: 90vw !important; margin-top: 4px !important; text-align: right !important"
              }
            ></div>
          </div>
        </main>

        {/* <footer className={styles.footer}></footer> */}
      </div>
    </div>
  );
}

export default Home;
