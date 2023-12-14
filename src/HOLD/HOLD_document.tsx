import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' key='char_set' />
          <meta
            name='description'
            content='A personal developer portfolio and art piece by Christopher Ksiazak'
            key='description'
          />
          <meta
            name='keywords'
            content='Christopher Ksiazak, Chris Ksiazak, Ksiazak, developer, web development, frontend, backend, full stack, software developer, software engineer'
            key='keywords'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto&family=Rubik&display=swap'
            rel='stylesheet'
            key='stylesheet'
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
