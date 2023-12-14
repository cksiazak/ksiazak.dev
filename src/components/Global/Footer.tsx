import { FC, ComponentType } from 'react'
import styled from 'styled-components'

// components
import {
  IoMdGitBranch,
  IoLogoLinkedin,
  IoLogoGithub,
  IoIosMail,
  IoMdDocument,
} from 'react-icons/io'
import { theme } from '../../theme/themes'
import { useTheme } from '../../theme/ThemeContext'

import * as ga from '../../../lib/ga'

const FooterMain = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 25px;
`

const FooterInner = styled.div`
  width: ${theme.global.pageWidth};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    width: 90%;
  }
`

const BranchLink = styled.a<{
  isDarkMode: boolean
}>`
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 1.75rem;
  padding: 10px 0px;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
  transition: ${theme.global.transitionTime};

  &:hover {
    color: ${theme.lightMode.linkHover};
  }

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1.35rem;
  }

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`

const IconList = styled.ul<{
  isDarkMode: boolean
}>`
  list-style: none;
  display: flex;
  padding: 0px;
  margin: 0px;

  li {
    a {
      display: flex;
      text-decoration: none;
      font-size: 3.25rem;
      padding: 10px 15px;
      transition: ${theme.global.transitionTime};
      color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};

      @media (max-width: 500px) {
        font-size: 2.5rem;
      }

      &:hover {
        color: ${theme.lightMode.linkHover};
      }
    }
  }
`

type LinkIconProps = {
  component: ComponentType
  href: string
  title: string
}

const LinkIcon: FC<LinkIconProps> = ({ component: Component, href, title }) => {
  const handleLinkIconClick = () =>
    ga.event({ action: 'Click on footer link', params: { link: title } })
  return (
    <li key={title}>
      <a href={href} title={title} onClick={handleLinkIconClick}>
        <Component />
      </a>
    </li>
  )
}

const Footer = () => {
  const { isDarkMode } = useTheme()

  const handleDesignedByLink = () =>
    ga.event({
      action: 'Click on footer link',
      params: { link: 'Designed by myself' },
    })

  return (
    <FooterMain>
      <FooterInner>
        <IconList isDarkMode={isDarkMode}>
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
        </IconList>
        <BranchLink
          title='Ksiazak.dev Repo'
          href='https://github.com/cksiazak/ksiazak.dev'
          isDarkMode={isDarkMode}
          onClick={handleDesignedByLink}
        >
          This website was created and designed by Christopher Ksiazak
          <span>
            <IoMdGitBranch />
          </span>
        </BranchLink>
      </FooterInner>
    </FooterMain>
  )
}

export default Footer
