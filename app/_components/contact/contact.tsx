import * as Styled from './contact.styles'

const Contact = () => {
  return (
    <Styled.Section>
      <Styled.Inner>
        <Styled.ContactHead>Thanks for visiting!</Styled.ContactHead>
        <Styled.Sentence>
          I'm actively in search of my next position where I can grow and develop
          (literally) something great. Feel free to reach out!
        </Styled.Sentence>
        <Styled.Email
          href='mailto:cksiazak@gmail.com'
          title='email'
        >
          Get in touch
        </Styled.Email>
      </Styled.Inner>
    </Styled.Section>
  )
}

export default Contact
