import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />
      <script defer src="https://pyscript.net/latest/pyscript.js"></script>

      </Head>
      <body>
      <py-config src="/pyconfig.toml">
      </py-config>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
