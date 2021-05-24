import { useEffect } from "react";
import ReactGA from "react-ga";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize("G-XBJFETXKRK");
    console.log("GA initialized");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
