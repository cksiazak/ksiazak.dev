import { FC, ComponentType } from 'react'

import * as Styled from './experience-card.styles'

export type ExperienceCardProps = {
  work: {
    default: ComponentType
    meta: {
      location: string
      position: string
      dates: string
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
    </Styled.CardWrapper>
  )
}

export default ExperienceCard
