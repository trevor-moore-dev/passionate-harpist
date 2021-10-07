import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import App from '../App';
import { ServerStyleSheets } from '@material-ui/styles';
import { CssBaseline } from "@material-ui/core";
import { lightTheme } from "../containers/Theme";
import { DarkModeProvider } from '../containers/ThemeContext';
import { ThemeProvider } from "@material-ui/core/styles";
import manifest from '../../build/asset-manifest.json';

const renderer = (req, res) => {
    const sheets = new ServerStyleSheets();
    const scripts = manifest.entrypoints.filter(file => file.toLowerCase().indexOf('js') !== -1);
    const styles = manifest.entrypoints.filter(file => file.toLowerCase().indexOf('css') !== -1);
    const html = ReactDOMServer.renderToString(
        sheets.collect(
            <DarkModeProvider>
                <ThemeProvider theme={lightTheme}>
                    <CssBaseline />
                    <App server location={req.url} />
                </ThemeProvider>
            </DarkModeProvider>));
    const helmet = Helmet.renderStatic();
    const muiCss = sheets.toString();
    
    return res.send(`<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <link rel="icon" href="/favicon.ico"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <meta name="theme-color" content="#000000"/>
    <link rel="apple-touch-icon" href="/logo128.png"/>
    <link rel="manifest" href="/manifest.json"/>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    <style id="jss-server-side">${muiCss}</style>
    ${styles.map(style => {
        return `<link rel="stylesheet" type="text/css" href="/${style}" />`;
    }).join('\n')}
</head>
<body>
    <div id="root">${html}</div>
    ${scripts.map(script => {
        return `<script src="/${script}"></script>`;
    }).join('\n')}
</body>
</html>`);
};

export { renderer };