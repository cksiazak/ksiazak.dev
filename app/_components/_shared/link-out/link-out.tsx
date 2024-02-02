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
      <Reveal>
        <h2>{heading}</h2>
        <Styled.DetailWrapper>
          <Styled.Sentence>
            {children}
          </Styled.Sentence>
          <Styled.Link
            href={link.href}
            title={link.title}
          >
            {link.text}
          </Styled.Link>
        </Styled.DetailWrapper>
      </Reveal>
    </Styled.Wrapper>
  )
}

export default LinkOut
