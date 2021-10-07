import React from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Home } from '../components/Home';
import { Contact } from '../components/Contact';
import { Gallery } from '../components/Gallery';
import { SocialMedia } from '../components/SocialMedia';
import { NotFound } from '../components/NotFound';
import { makeStyles } from '@material-ui/styles';
import { Container } from 'reactstrap';
import HarpistBackground from '../resources/images/harpist-background.jpg';

export default function Routes() {

    const useStyles = makeStyles({
        container: {
            paddingTop: '50px',
            paddingBottom: '100px',
            textAlign: 'center',
            minHeight: '95vh'
        },
        background: {
            width: '100%'
        }
    });

    const classes = useStyles();

    return (
        <Switch>
            <Route exact path='/'>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    title='Passionate Harpist | Abigail Moore'
                    meta={[
                        {
                            name: 'title',
                            content: 'Passionate Harpist | Abigail Moore'
                        },
                        {
                            name: 'description',
                            content: 'Harp performer and teacher in Scottsdale Arizona'
                        },
                        {
                            name: 'keywords',
                            content: 'harp,harpist,harp performer,harp teacher,arizona harpist,arizona harp,harp music,passionate harpist,abigail moore'
                        }
                    ]}
                    link={[
                        {
                            rel: 'canonical',
                            href: 'https://www.passionateharpist.com/'
                        }
                    ]}
                />
                <img src={HarpistBackground} className={classes.background} alt='Passionate Harpist' />
                <Container className={classes.container}>
                    <Home />
                </Container>
            </Route>
            <Route path='/gallery'>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    title='Passionate Harpist | Photo Gallery'
                    meta={[
                        {
                            name: 'title',
                            content: 'Passionate Harpist | Photo Gallery'
                        },
                        {
                            name: 'description',
                            content: 'Harp performer and teacher in Scottsdale Arizona Photo Gallery'
                        },
                        {
                            name: 'keywords',
                            content: 'harp,harpist,harp pictures,harp performer,harp teacher,arizona harpist,arizona harp,harp music,passionate harpist,abigail moore'
                        }
                    ]}
                    link={[
                        {
                            rel: 'canonical',
                            href: 'https://www.passionateharpist.com/gallery'
                        }
                    ]}
                />
                <Container className={classes.container}>
                    <Gallery />
                </Container>
            </Route>
            <Route path='/social-media'>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    title='Passionate Harpist | Social Media'
                    meta={[
                        {
                            name: 'title',
                            content: 'Passionate Harpist | Social Media'
                        },
                        {
                            name: 'description',
                            content: 'Harp performer and teacher in Scottsdale Arizona Social Media'
                        },
                        {
                            name: 'keywords',
                            content: 'harp,harpist,harp instagram,harp performer,harp teacher,arizona harpist,arizona harp,harp music,passionate harpist,abigail moore'
                        }
                    ]}
                    link={[
                        {
                            rel: 'canonical',
                            href: 'https://www.passionateharpist.com/social-media'
                        }
                    ]}
                />
                <Container className={classes.container}>
                    <SocialMedia />
                </Container>
            </Route>
            <Route path='/contact'>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    title='Passionate Harpist | Contact'
                    meta={[
                        {
                            name: 'title',
                            content: 'Passionate Harpist | Contact'
                        },
                        {
                            name: 'description',
                            content: 'Harp performer and teacher in Scottsdale Arizona Send a Message'
                        },
                        {
                            name: 'keywords',
                            content: 'harp,harpist,harp for hire,harp contact,harp connect,harp performer,harp teacher,arizona harpist,arizona harp,harp music,passionate harpist,abigail moore'
                        }
                    ]}
                    link={[
                        {
                            rel: 'canonical',
                            href: 'https://www.passionateharpist.com/contact'
                        }
                    ]}
                />
                <Container className={classes.container}>
                    <Contact />
                </Container>
            </Route>
            <Route component={NotFound} />
        </Switch>
    );
}