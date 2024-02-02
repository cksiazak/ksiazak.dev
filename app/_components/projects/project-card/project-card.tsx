import { FC, ComponentType } from 'react'
import Image from 'next/image'
import { IoMdGitBranch, IoMdLink } from 'react-icons/io'

import * as Styled from './project-card.styles'

export type ProjectCardProps = {
  project: {
    default: ComponentType
    meta: {
      name: string,
      status: string,
      img: string,
      links: {
        deployed?: string
        github?: string,
      }
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
          <Styled.MetaWrapper>
            <h3>{meta.name}</h3>
            <span>Status: {meta.status}</span>
          </Styled.MetaWrapper>
          {(meta?.links?.deployed || meta?.links?.github) && (
            <Styled.MetaWrapper>
              {meta?.links?.deployed && (
                <a href={meta?.links?.deployed}>
                  <IoMdLink />
                </a>
              )}
              {meta?.links?.github && (
                <a href={meta?.links?.github}>
                  <IoMdGitBranch />
                </a>
              )}
            </Styled.MetaWrapper>
          )}
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
