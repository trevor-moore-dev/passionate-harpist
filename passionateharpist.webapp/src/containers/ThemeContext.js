import React, { useState, useEffect, createContext, useContext } from "react";

const defaultContext = {
    isDark: false,
    toggle: () => { }
};

const useDarkMode = () => {
    const [isDark, setIsDark] = useState(false);
    useEffect(() => setIsDark(localStorage.getItem("dark") === "true"), []);
    return [isDark, setIsDark];
};

const ThemeContext = createContext(defaultContext);

export const useThemeContext = () => useContext(ThemeContext);

export const DarkModeProvider = ({ children }) => {
    const [isDark, setIsDark] = useDarkMode();
    const toggle = () => {
        localStorage.setItem("dark", JSON.stringify(!isDark));
        setIsDark(isDark => !isDark);
    };
    return (
        <ThemeContext.Provider value={{ isDark: isDark, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};