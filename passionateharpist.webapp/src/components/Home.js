import React from 'react';
import HarpistProfile2 from '../resources/images/harpist-profile-2.jpg';
import WelcomeLight from '../resources/images/welcome-light.png';
import WelcomeDark from '../resources/images/welcome-dark.png';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { useThemeContext } from '../containers/ThemeContext';

export function Home() {

    const theme = useTheme();
    const useStyles = makeStyles({
        root: {
            color: theme.text,
            flexGrow: 1
        },
        text: {
            textAlign: 'left'
        },
        welcomeImage: {
            width: '300px'
        },
        image: {
            width: '100%'
        },
        paragraph: {
            padding: theme.spacing(2)
        },
        grid: {
            flexWrap: 'wrap-reverse !important',
            [theme.breakpoints.up('md')]: {
                flexWrap: 'wrap !important'
            }
        }
    });

    const classes = useStyles();
    const themeContext = useThemeContext();

    return (
        <div className={classes.root}>
            <img src={WelcomeLight} alt='Welcome' className={classes.welcomeImage} />
            <div className={classes.text}>
                <p className={classes.paragraph}>Abigail Moore grew up in a large musical family, starting her musical training in piano and often singing harmonies with her sisters. After becoming proficient in piano, Abigail was given the freedom to pick another instrument. She was drawn to the elegance of the harp--its breathtaking appearance and angelic sound. For three years, Abigail was self-taught, but in the years to come she studied under Dr. Heidi Hernandez and Dr. Michelle Gott.</p>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2 }} className={classes.grid}>
                    <Grid item xs={12} sm={6}>
                        <p className={classes.paragraph}>Abigail enjoys performing, teaching, and composing for harp. She especially loves to share her music with people who do not regularly get to hear the harp, like the elderly, children, and those who are sick. Teaching has been one of her favorite opportunities, where she emphasizes proper technique, realistic goals, and healthy relationships with her students. As she continues to grow her repertoire, her main focuses are: classical, pop, and religious music.</p>
                        <p className={classes.paragraph}>Abigail has played the harp for 10 years, performing at a range of venues, her favorites being the Orpheum Theatre, Glendale Community College, the Phoenix Praise Symphony, and Northwest Community Church. She enjoys regularly playing for a variety of places, including restaurants, assisted living homes, funeral homes, churches, and celebrations. Abigail enjoys being involved in the harp community by attending harp conferences and being a part of the American Harp Society.</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={HarpistProfile2} className={classes.image} alt='Abigail Moore' />
                    </Grid>
                </Grid>
                <p className={classes.paragraph}>Graduating in 2020 with her Associates of Fine Arts in Instrumental Performance, Abigail had worked hard during her schooling, receiving the MCCCD Artist of Promise 1st place award two years in a row, rewarded with the Albert and Lola Chatinsky Scholarship in 2019, and honored with the Outstanding Jury Award in both fall of 2018 and 2019. </p>
            </div>
        </div>
    );
}