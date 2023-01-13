import Document, {
  Head,
  DocumentContext,
  Html,
  Main,
  NextScript,
} from 'next/document';
import Script from 'next/script';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>          
          <Script strategy="beforeInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-0T9BHVMG9L" />
          
          <Script 
            strategy="beforeInteractive"
            id="google-analytics"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-0T9BHVMG9L');
              `
            }}
          />

            <meta
              name="description"
              content="I'm Lucas, I'm Front-end Engineer"
            />
            <meta property="og:url" content="https://vigads.com.br/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Lucas Viga - Front-end Engineer Design" />
            <meta
              property="og:description"
              content="I’ve been working as a developer for more than 2 years. During this time, I’ve been developing with theses techs: React JS/Native, Next JS, JS and TS, Chakra UI, Styled Components and more."
            />
            <meta
              property="og:image"
              content="/images/cover-site.png"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              property="twitter:domain"
              content="https://vigads.com.br/"
            />
            <meta property="twitter:url" content="https://vigads.com.br/" />
            <meta name="twitter:title" content="Lucas Viga - Front-end Engineer Design" />
            <meta
              name="twitter:description"
              content="I’ve been working as a developer for more than 2 years. During this time, I’ve been developing with theses techs: React JS/Native, Next JS, JS and TS, Chakra UI, Styled Components and more."
            />
            <meta
              name="twitter:image"
              content="vigads"
            />
        </Head>      
        
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
