import { FC, ComponentType } from 'react'
import Image from 'next/image'

import * as Styled from './project-card.styles'

type LinkType = {
  href: string,
}

export type ProjectCardProps = {
  project: {
    default: ComponentType
    meta: {
      name: string
      status: string
      img: string,
      links?: LinkType[]
    }
  }
}

const ProjectCard: FC<ProjectCardProps> = ({
  project: { default: Project, meta },
}) => {

  return (
    <Styled.Outer>
      <Styled.Details>
        <Styled.Meta>
          <h3>{meta.name}</h3>
          <span>Status: {meta.status}</span>
        </Styled.Meta>
        <Project />
      </Styled.Details>
      <Styled.ImageWrapper>
        <Image
          src={meta.img}
          alt="Rytm main page"
          width={300}
          height={300}
        />
      </Styled.ImageWrapper>
    </Styled.Outer>
  )
}

export default ProjectCard
