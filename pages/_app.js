import 'semantic-ui-css/semantic.min.css'
import "../styles/main.css";
import HeadTag from "./components/HeadTag";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadTag />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
