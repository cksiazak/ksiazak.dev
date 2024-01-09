'use client'

import Image from 'next/image'

import Reveal from '../_shared/reveal'
import { Inner } from '../_shared/styles'
import * as Styled from './about-me.styles'
import * as Content from './about-me.mdx'
import selfie from './selfie.jpg'

const AboutMe = () => {
  return (
    <Styled.Outer id="aboutMe">
      <Inner>
        <Styled.AboutWrapper>
          <Reveal>
            <h2>About Me</h2>
            <Content.default />
          </Reveal>
        </Styled.AboutWrapper>
        <Styled.SelfieWrapper>
          <Reveal> 
            <Image
              src={selfie}
              alt="Chris's head"
              style={{
                width: '100%',
                height: 'auto',
                margin: '50px 0px',
                borderRadius: '25px 0px',
              }}
              width={300}
              height={300}
            />
          </Reveal>
        </Styled.SelfieWrapper>
      </Inner>
    </Styled.Outer>
  )
}

export default AboutMe
