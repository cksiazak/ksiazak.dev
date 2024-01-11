'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

import Reveal from '../_shared/reveal'
import Externals from '../_shared/externals'
import Particles from './particles'
import * as Styled from './heading.styles'
import avatar from './avatar.jpg'

const HeadingSection = () => {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  const doYouWantToKnowMore = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const element = document.querySelector('#aboutMe')
    element?.scrollIntoView({ block: 'start', behavior: 'smooth'})
  }

  return (
    <Styled.Heading>
      <Reveal>
        <Image
          src={avatar}
          alt="Chris's head"
          width={300}
          height={300}
        />
      </Reveal>
      <Reveal delay={0.75} type='fade'>
        <Styled.HeadingText>
          <span>Hi, my name is</span>
          <h1>Christopher Ksiazak</h1>
          <span>and I like to build things that live on the web</span>
        </Styled.HeadingText>
      </Reveal>
      <Externals reveal delay={1.15}/>
      <Styled.Typing href="#aboutMe" onClick={doYouWantToKnowMore}>
        <TypeAnimation
          sequence={[3000, 'Would you like to know more?']}
          wrapper="span"
          speed={50}
          style={{ color: '#F2EA46' }}
          repeat={Infinity}
        />
      </Styled.Typing>
      <Particles />
    </Styled.Heading>
  )
}

export default HeadingSection
