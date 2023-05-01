import Link from 'next/link';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';


// Define the light and dark theme constants
export const lightTheme = {
  bodyBg: '#fff',
  spclBg: '#e4e4e3',
  text: '#333',
  background: "url('https://24c888e45d8f9661.demo.carrd.co/assets/images/bg.svg?v=2b99aba4')",
  lonly_text: 'red',
};

export const darkTheme = {
  bodyBg: '#222',
  spclBg: '#353535',
  text: '#fff',
  background: "url('https://24c888e45d8f9661.demo.carrd.co/assets/images/bg.svg?v=2b99aba4')",
  donly_text: 'cyan',
};


// Define the global styles
export const GlobalStyle = createGlobalStyle`
  :root {
    --body-bg: ${(props) => props.theme.bodyBg};
    --mask-bg: ${(props) => props.theme.spclBg};
    --text-color: ${(props) => props.theme.text}; 
    --lonly-text:  ${(props) => props.theme.lonly_text};
    --donly-text:  ${(props) => props.theme.donly_text}; 
  }

  body {
    width: 100%;
    color: var(--text-color);
    transition: all 0.50s linear;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: var(--body-bg);
  }

  h1 {
    color: var(--text-color);
  }
  .banner_h1{
    color: var(--lonly-text);
    // opacity: 0.7;
    font-size:170%;
    transition: all 0.50s linear;
  }
  .mask_bg{
    background: var(--mask-bg);
  }
`;

// export const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
// };
export const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
};

export const NavLink = styled(Link)`
  color: ${(props) => props.theme.text};
  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;