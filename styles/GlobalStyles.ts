import { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'

const styles = css`
  * {
    box-sizing: border-box;
    font-family: "Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue", sans-serif;
  }
`

const GlobalStyles = createGlobalStyle`
  ${normalize};
  ${styles};
`

export default GlobalStyles
