import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getServerSideProps(ctx) {
    const ServerSideProps = await Document.getServerSideProps(ctx)
    return { ...ServerSideProps }
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