import React from "react";
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';

export function NotFound() {

    const theme = useTheme();
    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            paddingTop: theme.spacing(10),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        text: {
            color: theme.text
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.text}>404 Page Not found :(</div>
        </div>
    );
}