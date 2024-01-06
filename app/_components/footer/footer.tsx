'use client'

import { FC, ComponentType } from 'react'
import * as Styled from './footer.styles'

// components
import {
  IoMdGitBranch,
  IoLogoLinkedin,
  IoLogoGithub,
  IoIosMail,
  IoMdDocument,
} from 'react-icons/io'

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

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Inner>
        <Styled.IconList>
          <LinkIcon
            component={IoLogoLinkedin}
            href='https://linkedin.com/in/cksiazak'
            title='LinkedIn'
          />
          <LinkIcon
            component={IoLogoGithub}
            href='https://github.com/cksiazak'
            title='Github'
          />
          <LinkIcon
            component={IoIosMail}
            href='mailto:cksiazak@gmail.com'
            title='Mail'
          />
          <LinkIcon
            component={IoMdDocument}
            href='/assets/Cksiazak_Resume.pdf'
            title='Resume'
          />
        </Styled.IconList>
        <Styled.BranchLink
          title='Ksiazak.dev Repo'
          href='https://github.com/cksiazak/ksiazak.dev'
        >
          This website was created and designed by Christopher Ksiazak
          <span>
            <IoMdGitBranch />
          </span>
        </Styled.BranchLink>
      </Styled.Inner>
    </Styled.Footer>
  )
}

export default Footer
