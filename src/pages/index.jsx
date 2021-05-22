import { useEffect } from "react";
import { HeaderCard } from "../components/HeaderCard";
import styles from "../styles/Home.module.scss";

export default function Home(props) {
  useEffect(() => {
    console.log("Something changed");
  }, []);

  return (
    <div className={styles.main}>
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
          src="https://flo.uri.sh/visualisation/5975428/embed"
          title="Interactive or visual content"
          frameBorder="0"
          scrolling="no"
          className={styles.flourishContainer}
          sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        ></iframe>
      </div>
    </div>
  );
}

// Tell NextJS to generate as static HTML
// export async function getStaticProps() {
//   const response = await fetch("http://localhost:3333/cases-brazil-total");
//   const data = await response.json();

//   const brazilData = data.filter((d) => d.state === "TOTAL");
//   // do something...

//   return {
//     props: {
//       brazil: brazilData[0],
//     },
//     revalidate: 60 * 60 * 1, // update infos every 1 hour
//   };
// }
