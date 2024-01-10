import { FC, ComponentType } from 'react'
import Link from 'next/link'
import { IoIosLink } from 'react-icons/io'

import * as Styled from './experience-card.styles'

type LinkType = {
  href: string,
  text: string
}

export type ExperienceCardProps = {
  work: {
    default: ComponentType
    meta: {
      location: string
      position: string
      dates: string,
      links?: LinkType[]
    }
  }
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  work: { default: WorkContent, meta },
}) => {

  return (
    <Styled.CardWrapper>
      <Styled.MetaWrapper>
        <h3>{meta.location}</h3>
        <span>{meta.position}</span>
        <span>{meta.dates}</span>
      </Styled.MetaWrapper>
      <WorkContent />
      {meta?.links?.length && (
        <Styled.LinksWrapper>
          {meta?.links?.map(link => (
            <Link href={link.href}>
              {link.text} <IoIosLink/>
            </Link>
          ))}
        </Styled.LinksWrapper>
      )}
    </Styled.CardWrapper>
  )
}

export default ExperienceCard
