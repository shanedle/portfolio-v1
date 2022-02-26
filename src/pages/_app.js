import Head from "next/head";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="frontend, ui, ux, javascript, react, nextjs"
        />
        <meta name="author" content="Shane Le" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
