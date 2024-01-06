import Reveal from '../_shared/reveal'
import { Section } from '../_shared/styles'

const AboutMe = () => {
  return (
    <Section id="aboutMe">
      <Reveal> {/** About me */}
        <div>
          <h2>About Me</h2>
        </div>
      </Reveal>
      <Reveal> {/** selfie */}
        <div>
          <h2>Skills</h2>
        </div>
      </Reveal>
    </Section>
  )
}

export default AboutMe
