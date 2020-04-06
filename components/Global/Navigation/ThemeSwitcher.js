import React from 'react';
import styled from 'styled-components';

const ThemeButton = styled.button`
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const ThemeSwitcher = ({ icon, themeController }) => (
  <li>
    <ThemeButton type='button' onClick={themeController}>
      {icon}
    </ThemeButton>
  </li>
);

export default ThemeSwitcher;
