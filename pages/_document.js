import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getStaticProps(ctx) {
    const StaticProps = await Document.getStaticProps(ctx)
    return { ...StaticProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument