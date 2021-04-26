import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

function Home() {
  // function removeElementsByClass(className) {
  //   var elements = document.getElementsByClassName(className);
  //   if (elements?.length > 0) {
  //     elements[0].parentNode.removeChild(elements[0]);
  //   }
  // }

  // useEffect(() => {
  //   removeElementsByClass("flourish-credit");
  // });

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Corrida da <a>Vacina!</a>
        </h1>

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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export default Home;
