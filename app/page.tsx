import { Metadata } from 'next'

import { PageWrapper } from './page.styles'
import NavLinks from './_components/nav-links'
import Heading from './_components/heading'
import AboutMe from './_components/about-me'
import Experiences from './_components/experiences'
import Contact from './_components/contact'
import Footer from './_components/footer'
import Projects from './_components/projects'

export const metadata: Metadata = {
  title: 'Christopher Ksiazak - Full Stack Software Developer',
  keywords: [
    'Christopher Ksiazak',
    'Chris Ksiazak',
    'Ksiazak',
    'developer',
    'web development',
    'frontend',
    'backend',
    'full stack',
    'full-stack',
    'software developer',
    'software engineer'
  ],
  description: 'A personal developer portfolio and art piece by Christopher Ksiazak'
}

const Page = () => {
  return (
    <PageWrapper>
      <NavLinks />
      <Heading />
      <AboutMe />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </PageWrapper>
  )
}

export default Page
