'use client'

import Reveal from '../_shared/reveal'
import * as Styled from './experiences.styles'
import ExperienceCard from './experience-card'
import type { ExperienceCardProps } from './experience-card'

// data
import * as Kinsta from './data/kinsta.mdx'
import * as Function from './data/function.mdx'
import * as PatrickThomas from './data/patrick-thomas.mdx'
import * as EDealer from './data/e-dealer-direct.mdx'
import * as C3i from './data/c3i-solutions.mdx'

const Experiences = () => {
  return (
    <Styled.Section>
      <Styled.Inner>
        <div>
          <Reveal>
            <h2>Experiences</h2>
          </Reveal>
          <Reveal>
            <ExperienceCard work={Kinsta as ExperienceCardProps['work']} />
          </Reveal>
          <Reveal>
            <ExperienceCard work={Function as ExperienceCardProps['work']} />
          </Reveal>
          <Reveal>
            <ExperienceCard work={EDealer as ExperienceCardProps['work']} />
          </Reveal>
          <Reveal>
            <ExperienceCard work={PatrickThomas as ExperienceCardProps['work']} />
          </Reveal>
          <Reveal>
            <ExperienceCard work={C3i as ExperienceCardProps['work']} />
          </Reveal>
        </div>
        <div>
        <Reveal>
          <h2>Technologies</h2>
        </Reveal>
        </div>
      </Styled.Inner>
    </Styled.Section>
  )
}

export default Experiences
