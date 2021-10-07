import React from 'react'
import { useThemeContext } from '../containers/ThemeContext';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { Tooltip } from "@material-ui/core";

export default function ToggleTheme() {

    const theme = useThemeContext();

    return (
        <Tooltip title={theme.isDark ? 'Light Mode' : 'Dark Mode'}>
            <div onClick={() => theme.toggle()}>
                {theme.isDark ? <Brightness7Icon color="secondary" /> : <Brightness4Icon color="secondary" />}
            </div>
        </Tooltip>
    );
}