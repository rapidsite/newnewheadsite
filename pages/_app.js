import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/index.scss";
import ScrollToTop from "../components/common/ScrollTop";
import { hotjar } from 'react-hotjar'

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  useEffect(() => {
    hotjar.initialize(3483283, 6)
  }, [])

  return (
    <div className="main-page-wrapper">
      <Component {...pageProps} />
      <ScrollToTop />
    </div>
  );
}
