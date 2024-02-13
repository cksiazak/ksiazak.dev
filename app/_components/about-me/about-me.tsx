'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'

import Reveal from '../_shared/reveal'
import { Inner } from '../_shared/styles'
import * as Styled from './about-me.styles'
import * as Content from './data/about-me.mdx'
import selfie from './selfie.jpg'

const skills = [
  'Javascript/Typescript',
  'React/React Native',
  'CSS',
  'Redux',
  'Node',
  'SQL',
  'Apollo GraphQL',
  'Ruby on Rails',
  'Docker',
  'GCP',
  'AWS',
  'TDD/BDD',
  'Kubernetes/Helm',
  'Redis',
  'Pub/Sub',
  'BigQuery',
  'Prisma',
  'JIRA',
  'Tableau',
  'DataDog',
  'MixPanel'
]

const AboutMe = () => {
  const ref = useRef(null)
  const [isRevealed, setIsRevealed] = useState(false)
  const isInView = useInView(ref, {once: true, amount: 'some' })

  useEffect(() => {
    if (isInView) {
      setIsRevealed(true)
    }
  }, [isInView])

  return (
    <Styled.Outer id="aboutMe">
      <Inner>
        <Styled.AboutWrapper>
          <Reveal>
            <h2>About Me</h2>
            <Content.default />
          </Reveal>
          <Styled.Skills ref={ref}>
            <Reveal width='100%'>
              <h3>Skills</h3>
            </Reveal>
            <ul>
              {skills.map((skill, i) => (
                <Reveal
                  isRevealed={isRevealed}
                  delay={0.25 + (0.1 * i)}
                  key={skill}
                >
                  <li>{skill}</li>
                </Reveal>
              ))}
            </ul>
          </Styled.Skills>
        </Styled.AboutWrapper>
        <Styled.SelfieWrapper>
          <Reveal> 
            <Image
              src={selfie}
              alt="Chris's selfie"
              width={350}
              height={300}
            />
          </Reveal>
        </Styled.SelfieWrapper>
      </Inner>
    </Styled.Outer>
  )
}

export default AboutMe
