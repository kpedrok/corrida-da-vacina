import { useEffect } from "react";
import { HeaderCard } from "../components/HeaderCard";
import styles from "../styles/Home.module.scss";
import * as gtag from "../utils/gtag";

export default function Home(props) {
  useEffect(() => {
    console.log("Something changed");
  }, []);

  function emailMe() {
    gtag.event({
      action: "test_action",
      category: "test_category",
      label: "test_label",
      value: "test_value",
    });
  }

  return (
    <div className={styles.container}>
      <HeaderCard />
      {/* <p>Testes: {JSON.stringify(props.brazil)}</p> */}
      {/* <p>
        Pessoas vacinadas com a 1º dose:{" "}
        {JSON.stringify(props.brazil.vaccinated)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
      </p>
      <p>
        1º dose para cada 100 mil habitantes:{" "}
        {parseFloat(
          JSON.stringify(props.brazil.vaccinated_per_100k_inhabitants)
        ).toFixed(2)}
      </p>
      <p>
        2º dose para cada 100 mil habitantes:{" "}
        {parseFloat(
          JSON.stringify(props.brazil.vaccinated_second_per_100k_inhabitants)
        ).toFixed(2)}
      </p>
      <p>
        Data de atualização:{" "}
        {JSON.stringify(props.brazil.date).replace(/['"]+/g, "")}
      </p> */}
      <div className={styles.margin}>
        <iframe
          loading="lazy"
          src="https://flo.uri.sh/visualisation/5975428/embed"
          title="Interactive or visual content"
          frameBorder="0"
          scrolling="no"
          className={styles.flourishContainer}
          sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        ></iframe>
      </div>

      <div>
        <button
          onClick={emailMe}
          style={{
            background: "white",
            border: "2px solid white",
            boxShadow: "0px 8px 16px rgb(0 0 0 / 16%)",
            borderRadius: "20px",
          }}
        >
          <a
            style={{
              color: "#FB4B6F",
              fontWeight: 800,
              textDecoration: "none",
            }}
            target="_blank"
            href="mailto: corridadavacina@gmail.com"
          >
            {" "}
            Fale conosco
          </a>
        </button>
      </div>
    </div>
  );
}

// Tell NextJS to generate as static HTML
export async function getStaticProps() {
  // const response = await fetch("http://localhost:3333/cases-brazil-total");
  // const data = await response.json();

  // const brazilData = data.filter((d) => d.state === "TOTAL");
  // do something...

  return {
    props: {
      // brazil: brazilData[0],
    },
    revalidate: 60 * 60 * 1, // update infos every 1 hour
  };
}
