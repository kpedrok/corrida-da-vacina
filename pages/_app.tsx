import React, { useEffect } from "react";
import ReactGA from "react-ga";
import "../styles/globals.css";

ReactGA.initialize(process.env.GOOGLE_ANALYTICS_TRACKING_ID);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const page = location.pathname;
    trackPage(page);
  });

  return <Component {...pageProps} />;
}

export default MyApp;
