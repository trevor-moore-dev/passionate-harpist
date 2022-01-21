import React from 'react';
import { Container } from 'reactstrap';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';

export function Footer() {

    const theme = useTheme();
    const useStyles = makeStyles({
        text: {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            [theme.breakpoints.up('md')]: {
                display: 'block'
            }
        },
        textItem: {
            color: theme.text,
            margin: '0 10px',
            "&:hover": {
                color: theme.text,
                textDecoration: 'none'
            }
        }
    });

    const classes = useStyles();

    return (
        <Container>
            <p className={classes.text}>
                <a href="https://www.instagram.com/passionateharpist/" target="_blank" rel="noopener noreferrer" className={classes.textItem}>Instagram</a>
                <a href="tel:6023301729" className={classes.textItem}>(602) 330-1729</a>
                <a href="https://www.google.com/maps/place/Glendale,+AZ+85304/@33.596279,-112.1942481,14z" target="_blank" rel="noopener noreferrer" className={classes.textItem}>Glendale AZ</a>
                <a href="mailto:passionateharpist@gmail.com" className={classes.textItem}>passionateharpist@gmail.com</a>
            </p>
        </Container>
    );
}