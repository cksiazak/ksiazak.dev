import { Fragment } from "react"
import Head from "next/head"
import Script from 'next/script'

import Heading from "../src/components/Heading"
import AboutMe from "../src/components/AboutMe"
import Experience from "../src/components/Experience"
import Projects from "../src/components/Projects"
import Contact from "../src/components/Contact"

const Home = () => {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title>Christopher Ksiazak - Full Stack Software Developer</title>
        <meta
          name="description"
          content="A personal developer portfolio and art piece by Christopher Ksiazak"
        />
        <meta
          name="keywords"
          content="Christopher Ksiazak, Chris Ksiazak, Ksiazak, developer, web development, frontend, backend, full stack, software developer, software engineer"
        />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <Heading />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </Fragment>
  )
}

export default Home
