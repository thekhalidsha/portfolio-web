import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme, toggleTheme } from '@/styles/globalStyles';
// const GlobalStyle = createGlobalStyle`
//   body {
//     background-color: ${({ theme }) => theme.background};
//     color: ${({ theme }) => theme.color};
//     transition: all 0.50s linear;
//   }
// `;

// const lightTheme = {
//   background: '#f5f5f5',
//   color: '#333',
// };

// const darkTheme = {
//   background: '#222',
//   color: '#fff',
// };

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <button onClick={toggleTheme}>Toggle theme</button>
      <h1>Hello World</h1>
      <p>This is an example of a standalone page with dark and light themes.</p>
    </ThemeProvider>
  );
};

export default App;
