import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import useRequest from "../hooks/useRequest";
import config from "../config.json";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import HarpistProfile from '../resources/images/harpist-profile.jpg';
import LazyLoad from 'react-lazy-load';
import Skeleton from '@material-ui/core/Skeleton';
import Stack from '@material-ui/core/Stack';

export function SocialMedia() {

    const theme = useTheme();
    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            paddingTop: theme.spacing(6),
            color: theme.text
        },
        header: {
            textAlign: 'left'
        },
        profileImg: {
            maxHeight: '40px'
        },
        lazyLoad: {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        mediaContent: {
            background: 'black',
            [theme.breakpoints.up('md')]: {
                height: '545px'
            }
        },
        mediaImg: {
            maxHeight: '100%',
            maxWidth: '100%'
        },
        mediaVideo: {
            outline: 'none',
            maxHeight: '100%',
            maxWidth: '100%'
        },
        mediaText: {
            color: theme.text
        },
        caption: {
            textAlign: 'left',
            overflow: 'hidden',
            minHeight: '117px',
            display: '-webkit-box',
            '-webkitLineClamp': '5',
            '-webkitBoxOrient': 'vertical'
        },
        link: {
            textDecoration: 'none',
            cursor: 'pointer',
            '&:hover': {
                textDecoration: 'none'
            }
        },
    });

    const classes = useStyles();
    const { get } = useRequest();
    const [media, setMedia] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getSocialMediaFeed = async () => {
            const response = await get(config.GET_SOCIAL_MEDIA_FEED);
            if (response.success) {
                setMedia(response.data);
            } else {
                setError('Failed to load social media data. Please refresh the page and try again.');
            }
            setIsLoading(false);
        };
        getSocialMediaFeed();
    }, []);

    return (
        <div className={classes.root}>
            <Box>
                <Grid container spacing={2}>
                    {isLoading ? <>
                        <Grid item xs={12} md={6}>
                            <Stack spacing={1}>
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" height={545} />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack spacing={1}>
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" height={545} />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack spacing={1}>
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" height={545} />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack spacing={1}>
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" height={545} />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack spacing={1}>
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" height={545} />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack spacing={1}>
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" height={545} />
                            </Stack>
                        </Grid>
                        </> : <>
                        {media.map(item =>
                            <Grid item xs={12} md={6} key={item.id}>
                                <Card>
                                    <a href={item.permaLink} target="_blank" rel="noopener noreferrer" className={classes.link}>
                                        <CardHeader
                                            title='Passionate Harpist'
                                            className={classes.header}
                                            avatar={<Avatar aria-label="Passionate Harpist">
                                                <LazyLoad>
                                                    <img src={HarpistProfile} alt='Passionate Harpist' className={classes.profileImg} />
                                                </LazyLoad>
                                            </Avatar>}
                                        />
                                    </a>
                                    <CardMedia className={classes.mediaContent}>
                                        {item.mediaType === 'VIDEO' ?
                                            <LazyLoad className={classes.lazyLoad}>
                                                <video controls className={classes.mediaVideo}>
                                                    <source src={item.mediaUrl} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </LazyLoad> :
                                            <a href={item.permaLink} target="_blank" rel="noopener noreferrer" className={classes.link}>
                                                <LazyLoad className={classes.lazyLoad}>
                                                    <img src={item.mediaUrl} alt='Passionate Harpist' className={classes.mediaImg} />
                                                </LazyLoad>
                                            </a>}
                                    </CardMedia>
                                    <a href={item.permaLink} target="_blank" rel="noopener noreferrer" className={classes.link}>
                                        <CardContent className={classes.mediaText}>
                                            <p className={classes.caption}>{item.caption}</p>
                                            <p>{new Date(item.timestamp).toDateString()}</p>
                                        </CardContent>
                                    </a>
                                </Card>
                            </Grid>)}
                        </>}
                </Grid>
                {error}
            </Box>
        </div>
    );
}