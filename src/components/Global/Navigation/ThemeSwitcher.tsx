import { FC } from "react"
import styled from "styled-components"

const ThemeButton = styled.button`
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`

type ThemeSwitcherProps = {
  icon: string,
  themeController: () => void
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ icon, themeController }) => (
  <li key="theme_button">
    <ThemeButton type="button" onClick={themeController}>
      {icon}
    </ThemeButton>
  </li>
)

export default ThemeSwitcher
