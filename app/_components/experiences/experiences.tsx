'use client'

import Reveal from '../_shared/reveal'
import * as Styled from './experiences.styles'
import ExperienceCard from './experience-card'
import type { ExperienceCardProps } from './experience-card'

// data
import { Kinsta, Function, PatrickThomas, EDealer, C3i } from './data'

const Experiences = () => {
  return (
    <Styled.Section>
      <Styled.Inner>
        <Reveal>
          <h2>Experiences</h2>
          <ExperienceCard work={Kinsta as ExperienceCardProps['work']} />
          <ExperienceCard work={Function as ExperienceCardProps['work']} />
          <ExperienceCard work={EDealer as ExperienceCardProps['work']} />
          <ExperienceCard work={PatrickThomas as ExperienceCardProps['work']} />
          <ExperienceCard work={C3i as ExperienceCardProps['work']} />
        </Reveal>
      </Styled.Inner>
    </Styled.Section>
  )
}

export default Experiences
