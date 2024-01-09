import { FC, ComponentType } from 'react'
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoIosMail,
  IoMdDocument,
} from 'react-icons/io'

import Reveal from '../reveal'
import * as Styled from './externals.styles'

type LinkIconProps = {
  component: ComponentType
  href: string
  title: string
}

const LinkIcon: FC<LinkIconProps> = ({ component: Component, href, title }) => {
  return (
    <li key={title}>
      <a href={href} title={title}>
        <Component />
      </a>
    </li>
  )
}

type ExternalsProps = {
  reveal?: boolean
  delay?: number
}

const Externals: FC<ExternalsProps> = ({ reveal = false, delay = 0.25 }) => {
  return (
    <Styled.IconList>
      <Reveal isActive={reveal} delay={delay + 0.1}>
        <LinkIcon
          component={IoLogoLinkedin}
          href='https://linkedin.com/in/cksiazak'
          title='LinkedIn'
        />
      </Reveal>
      <Reveal isActive={reveal} delay={delay + 0.2}>
        <LinkIcon
          component={IoLogoGithub}
          href='https://github.com/cksiazak'
          title='Github'
        />
      </Reveal>
      <Reveal isActive={reveal} delay={delay + 0.3}>
        <LinkIcon
          component={IoIosMail}
          href='mailto:cksiazak@gmail.com'
          title='Mail'
        />
      </Reveal>
      <Reveal isActive={reveal} delay={delay + 0.4}>
        <LinkIcon
          component={IoMdDocument}
          href='/assets/Cksiazak_Resume.pdf'
          title='Resume'
        />
      </Reveal>
    </Styled.IconList>
  )
}

export default Externals
