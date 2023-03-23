import { Html, Head, Main, NextScript } from 'next/document'
import * as snippet from '@segment/snippet';

const { ANALYTICS_WRITE_KEY, NODE_ENV } = process.env;


export default function Document() {
  function render() {
    const opts = {
      apiKey: ANALYTICS_WRITE_KEY,
      page: true,
    }
    if (NODE_ENV === 'development') {
      return snippet.max(opts);
    }
    return snippet.min(opts);
  }

  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: render() }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
