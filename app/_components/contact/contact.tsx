import LinkOut from '../_shared/link-out'
import * as Styled from './contact.styles'

const Contact = () => {
  return (
    <Styled.Section>
      <Styled.Inner>
        <LinkOut
          heading='Thanks for visiting!'
          link={{
            href: 'mailto:cksiazak@gmail.com',
            title: "Chris's Email",
            text: 'Get in touch'
          }}
        >
          I'm actively in search of my next position where I can grow and develop
          (literally) something great.
          <br />
          <br />
          Feel free to reach out!
        </LinkOut>
      </Styled.Inner>
    </Styled.Section>
  )
}

export default Contact
