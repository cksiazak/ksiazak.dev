import { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'

const styles = css`
  * {
    font-family: "Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue", sans-serif;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  body {
    background-image: linear-gradient(
        to bottom,
        hsl(220.65, 100%, 6.08%) 0%,
        hsl(220.8, 99.29%, 6.24%) 8.1%,
        hsl(220.96, 98.69%, 6.62%) 15.5%,
        hsl(221.1, 98.24%, 7.17%) 22.5%,
        hsl(221.21, 97.9%, 7.82%) 29%,
        hsl(221.3, 97.65%, 8.51%) 35.3%,
        hsl(221.36, 97.48%, 9.22%) 41.2%,
        hsl(221.41, 97.35%, 9.91%) 47.1%,
        hsl(221.45, 97.25%, 10.57%) 52.9%,
        hsl(221.47, 97.18%, 11.18%) 58.8%,
        hsl(221.5, 97.12%, 11.73%) 64.7%,
        hsl(221.51, 97.08%, 12.2%) 71%,
        hsl(221.52, 97.05%, 12.59%) 77.5%,
        hsl(221.53, 97.03%, 12.89%) 84.5%,
        hsl(221.54, 97.02%, 13.07%) 91.9%,
        hsl(221.54, 97.01%, 13.14%) 100%
      );
    background-repeat: none;
    background-size: cover;

    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  }
`

const GlobalStyles = createGlobalStyle`
  ${normalize};
  ${styles};
`

export default GlobalStyles
