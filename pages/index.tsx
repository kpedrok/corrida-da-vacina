import Head from "next/head";
import React, { useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import styles from "../styles/Home.module.css";
const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      LNAME: name.value,
    });

  return (
    <div
      style={{
        borderRadius: 16,
        padding: 10,
        display: "inline-block",
        background: "#FFFFFF",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {status === "sending" && <div style={{ color: "blue" }}>enviando...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <div style={{ margin: 5 }}>
        <input
          style={{
            fontSize: "1em",
            padding: 5,
            border: "none",
            marginRight: 5,
            borderRadius: 10,
            background: "rgb(255, 86, 120, 0.5)",
            color: "white",
          }}
          ref={(node) => (email = node)}
          type="email"
          placeholder="email@email.com"
        />

        <input
          style={{
            fontSize: "1em",
            padding: 5,
            border: "none",
            borderRadius: 10,
            background: "rgb(255, 86, 120, 0.5)",
            color: "white",
          }}
          ref={(node) => (name = node)}
          type="text"
          placeholder="UF"
        />
      </div>

      <div style={{ margin: 5, display: "flex", justifyContent: "center" }}>
        <button
          style={{
            fontSize: "1em",
            padding: 10,
            borderRadius: 5,
            background: "#FF5678",
            color: "white",
            border: "none",
          }}
          onClick={submit}
        >
          ASSINAR NEWSLETTER
        </button>
      </div>
    </div>
  );
};

function Home() {
  const url =
    "https://gmail.us7.list-manage.com/subscribe/post?u=bfd7f8bebed04e4d8485f9949&amp;id=b1fc97b0ef";
  const SimpleForm = () => <MailchimpSubscribe url={url} />;

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
          <div style={{ marginTop: 10 }}>
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={(formData) => subscribe(formData)}
                />
              )}
            />
          </div>
        </main>

        {/* <footer className={styles.footer}></footer> */}

        {/* <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <div>
              <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
              {status === "sending" && (
                <div style={{ color: "blue" }}>enviando...</div>
              )}
              {status === "error" && (
                <div
                  style={{ color: "red" }}
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )}
              {status === "success" && (
                <div style={{ color: "green" }}>Inscrito!</div>
              )}
            </div>
          )}
        /> */}
      </div>
    </div>
  );
}

export default Home;
