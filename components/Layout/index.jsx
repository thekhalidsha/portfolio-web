import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
// import '@fortawesome/fontawesome-svg-core/styles.css'
import { useState, useEffect } from 'react';
import { GlobalStyle, lightTheme, darkTheme } from '../../styles/globalStyles';
import NavX from "../NavbarX";

const Layout = ({ children }) => {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDarkMode ? 'dark' : 'light');
    }, []);
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return ( 
        <>
        <Head>
        </Head>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <div className="">
            <NavX onToggleTheme={toggleTheme} themeName={theme} ></NavX>
            {/* <Navbar onToggleTheme={toggleTheme} themeName={theme} /> */}
            <div className="">{children}</div>
            <Footer></Footer>
        </div>
        </ThemeProvider>
        </>
     );
}
 
export default Layout;