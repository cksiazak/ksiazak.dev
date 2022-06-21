import { Fragment } from "react"
import Head from "next/head"

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
      <Heading />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </Fragment>
  )
}

export default Home
