import Head from "next/head";
import React, { useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
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
          <div className={styles.header}>
            <div className={styles.text}>
              <div className={styles.title}>Corrida da Vacina!</div>
              <div className={styles.subtitle}>
                Visualize a evolução percentual de pessoas que já tomaram a
                primeira dose da vacina no seu estado.
              </div>
            </div>

            {/* <img src={ReactLogo} /> */}
          </div>
          <div className={styles.margin}>
            <iframe
              src="https://flo.uri.sh/visualisation/5975428/embed"
              title="Interactive or visual content"
              frameBorder="0"
              scrolling="no"
              className={styles.flourishContainer}
              sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
            ></iframe>
          </div>
          <div>Assita com música:</div>
          <ReactAudioPlayer
            src="https://www.bensound.com/bensound-music/bensound-anewbeginning.mp3"
            autoPlay={true}
            controls
            onCanPlay={(event) => console.log(1, event)}
            onCanPlayThrough={(event) => console.log(2, event)}
            onError={(event) => console.log(3, event)}
            onAbort={(event) => console.log(4, event)}
          />
        </main>

        {/* <footer className={styles.footer}></footer> */}
      </div>
    </div>
  );
}

export default Home;
