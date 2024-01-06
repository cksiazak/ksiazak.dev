'use client'

import Image from 'next/image'

import Reveal from '../_shared/reveal'
import Layout from '../_shared/layout'
import * as Styled from './about-me.styles'
import * as Content from '../data/aboutme/about-me.mdx'
import selfie from './selfie.jpg'

const AboutMe = () => {
  return (
    <Layout.Section id="aboutMe">
      <Styled.Inner>
        <Styled.AboutWrapper>
          <Reveal> {/** About me */}
            <h2>About Me</h2>
            <Content.default />
          </Reveal>
        </Styled.AboutWrapper>
        <Styled.SelfieWrapper>
          <Reveal> {/** selfie */}
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
      </Styled.Inner>
    </Layout.Section>
  )
}

export default AboutMe
