import { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'

const styles = css`
  * {
    font-family: "Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue", sans-serif;
  }

  body {
    background-image: linear-gradient(to bottom, #000f20, #011327, #01172e, #001a36, #001d3d);
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  
    @keyframes fadeInAnimation {
      0% {
          opacity: 0;
      }
      100% {
          opacity: 1;
       }
    }
  }
`

const GlobalStyles = createGlobalStyle`
  ${normalize};
  ${styles};
`

export default GlobalStyles
