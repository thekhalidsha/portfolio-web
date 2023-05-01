import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bodyBg};
    color: ${(props) => props.theme.text};
  }
`;

const lightTheme = {
  bodyBg: '#fff',
  text: '#333',
};

const darkTheme = {
  bodyBg: '#222',
  text: '#fff',
};

export default function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDarkMode ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <h1>Hello, Worldx!</h1>
        <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'dark' : 'light'} mode</button>
      </ThemeProvider>
    </>
  );
}
