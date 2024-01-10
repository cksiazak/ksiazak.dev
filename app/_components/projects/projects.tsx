'use client'

import Reveal from '../_shared/reveal'
import ProjectCard from './project-card'
import type { ProjectCardProps } from'./project-card'
import * as Styled from './projects.styles'

import { Rytm } from './data'

const Projects = () => {
  return (
    <Styled.Section>
      <Styled.Inner>
        <Reveal>
          <h2>Projects</h2>
        </Reveal>

        <Styled.ProjectsWrapper>
          <Reveal>
            <ProjectCard project={Rytm as ProjectCardProps['project']} />
          </Reveal>
        </Styled.ProjectsWrapper>
      </Styled.Inner>
    </Styled.Section>
  )
}

export default Projects
