import { getInitColorSchemeScript } from '@mui/joy/styles';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.bunny.net" />
          <link
            href="https://fonts.bunny.net/css?family=inter:100,200,300,400,500,600,700,800,900"
            rel="stylesheet"
          />
          <Script src="https://cdn.tailwindcss.com"></Script>
        </Head>
        <body>
          {getInitColorSchemeScript()}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
