'use client'

import { IoMdGitBranch } from 'react-icons/io'

import Externals from '../_shared/externals'
import * as Styled from './footer.styles'

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Inner>
        <Externals />
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
