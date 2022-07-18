import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";


//тут мы инициализируем html тег, даем ему язык и впринципе создаем документ
//Эта запись стандартная ее можно найти в интернете
class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps};
    }


  render(): JSX.Element {
    return (
      <Html lang="ua">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument
