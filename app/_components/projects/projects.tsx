'use client'

import Reveal from '../_shared/reveal'
import LinkOut from '../_shared/link-out'
import ProjectCard from './project-card'
import type { ProjectCardProps } from'./project-card'
import * as Styled from './projects.styles'

import { Rytm } from './data'
import { SpeechSynthesizer } from './data'

const Projects = () => {
  return (
    <Styled.Section>
      <Styled.Inner>
        <LinkOut
          heading="Things I've Built"
          link={{
            href: 'https://github.com/cksiazak',
            title: "Chris's GitHub",
            text: 'Check out my GitHub?'
          }}
        >
          I've been pretty busy over the last few years between COVID,
          dedicating myself to my work and side hobbies, that I deleted all my
          projects as they don't accurately reflect who I am, what I do, or my
          current abilities.
          <br />
          <br />
          I'm working on new things below :)
        </LinkOut>

        <Styled.ProjectsWrapper>
          <Reveal>
            <ProjectCard project={SpeechSynthesizer as ProjectCardProps['project']} />
          </Reveal>
          <Reveal>
            <ProjectCard project={Rytm as ProjectCardProps['project']} />
          </Reveal>
        </Styled.ProjectsWrapper>
      </Styled.Inner>
    </Styled.Section>
  )
}

export default Projects
