import Reveal from '../reveal'
import * as Styled from './link-out.styles'

type LinkOutProps = {
  heading: string,
  children: React.ReactNode,
  link: {
    href: string,
    title: string,
    text: string
  }
}

const LinkOut = ({ heading, children, link }: LinkOutProps) => {
  return (
    <Styled.Wrapper>
      <Reveal isCentered>
        <h2>{heading}</h2>
      </Reveal>
      <Styled.DetailWrapper>
        <Reveal isCentered>
          <Styled.Sentence>
            {children}
          </Styled.Sentence>
        </Reveal>
        <Reveal isCentered>
          <Styled.Link
            href={link.href}
            title={link.title}
          >
            {link.text}
          </Styled.Link>
        </Reveal>
      </Styled.DetailWrapper>
    </Styled.Wrapper>
  )
}

export default LinkOut
