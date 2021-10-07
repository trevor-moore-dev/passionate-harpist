import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import HarpistProfile from '../resources/images/harpist-profile.jpg';
import SendAMessageLight from '../resources/images/send-a-message-light.png';
import SendAMessageDark from '../resources/images/send-a-message-dark.png';
import { TextField, Grid, Button } from '@material-ui/core';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTheme } from '@material-ui/core/styles';
import { useThemeContext } from '../containers/ThemeContext';
import useRequest from "../hooks/useRequest";
import config from "../config.json";

export function Contact() {

    const theme = useTheme();
    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            paddingTop: theme.spacing(10)
        },
        sendAMessageImage: {
            width: '300px'
        },
        image: {
            width: '100%'
        },
        submit: {
            marginTop: theme.spacing(2),
            width: '100%'
        },
        error: {
            color: 'red'
        },
        text: {
            color: theme.text,
        }
    });

    const recaptchaRef = useRef();
    const classes = useStyles();
    const themeContext = useThemeContext();
    const { post } = useRequest();
    const [name, setName] = useState('');
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const [success, setSuccess] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setSuccess(false);
        setResponse('');
        if (name && emailOrPhone && subject && message) {
            if (recaptchaRef.current) {
                setSubmitting(true);
                const token = await recaptchaRef.current.executeAsync();
                const response = await post(config.SEND_MESSAGE_URL, {
                    Token: token,
                    Data: {
                        Name: name,
                        EmailOrPhone: emailOrPhone,
                        Subject: subject,
                        Message: message
                    }
                });
                setSuccess(response.success);
                if (response.success) {
                    setName('');
                    setEmailOrPhone('');
                    setSubject('');
                    setMessage('');
                    setResponse('Message sent!');
                } else {
                    setResponse(response.errors['*']);
                }
                setSubmitting(false);
                if (recaptchaRef.current) {
                    recaptchaRef.current.reset();
                }
            } else {
                setResponse('An error occured. Please refresh the page and try again.');
            }
        } else {
            setResponse('Message not sent. Please fill in all fields.');
        }
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <img src={HarpistProfile} className={classes.image} alt='Abigail Moore' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <form onSubmit={onSubmit}>
                        {themeContext.isDark ?
                            <img src={SendAMessageDark} alt='Send a Message' className={classes.sendAMessageImage} /> :
                            <img src={SendAMessageLight} alt='Send a Message' className={classes.sendAMessageImage} />}
                        <TextField
                            label="Name"
                            fullWidth
                            variant="filled"
                            margin="normal"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            label="Email or Phone"
                            fullWidth
                            variant="filled"
                            margin="normal"
                            value={emailOrPhone}
                            onChange={(e) => setEmailOrPhone(e.target.value)}
                        />
                        <TextField
                            label="Subject"
                            fullWidth
                            variant="filled"
                            margin="normal"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <TextField
                            label="Message"
                            fullWidth
                            variant="filled"
                            margin="normal"
                            multiline
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        {response && <div className={success ? classes.text : classes.error}>{response}</div>}
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            size='invisible'
                            sitekey={config.GOOGLE_RECAPTCHA_SITEKEY}
                        />
                        <Button
                            variant='contained'
                            className={classes.submit}
                            type='submit'
                            disabled={submitting}
                        >
                            Send
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
}