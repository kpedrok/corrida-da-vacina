import { useEffect } from "react";
import ReactGa from "react-ga";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGa.initialize("G-XBJFETXKRK");
    console.log("GA initialized");
    ReactGa.pageview("/");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
