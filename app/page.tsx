import { Metadata } from 'next'

import { PageWrapper } from './page.styles'
import Heading from './_components/Heading'
import AboutMe from './_components/AboutMe'

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
    </PageWrapper>
  )
}

export default Page
