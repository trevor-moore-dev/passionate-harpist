import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CssBaseline } from "@material-ui/core";
import { lightTheme, darkTheme } from "./containers/Theme";
import { DarkModeProvider, useThemeContext } from './containers/ThemeContext';
import { ThemeProvider } from "@material-ui/core/styles";
import { unregister } from './registerServiceWorker';

function Main() {
    const theme = useThemeContext();
    return (
        <DarkModeProvider>
            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <App client />
            </ThemeProvider>
        </DarkModeProvider>
    );
}

ReactDOM.hydrate(<Main />, document.getElementById('root'));
    
unregister();
//uncomment once app is complete and ready to ship:
//registerServiceWorker();