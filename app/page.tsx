import { Metadata } from 'next'

import { PageWrapper } from './page.styles'
import Heading from './_components/heading'
import AboutMe from './_components/about-me'

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
      <Heading />
      <AboutMe />
      {/* experiences */}
      {/* skills */}
      {/*  projects */}
      {/* constact card */}
    </PageWrapper>
  )
}

export default Page
