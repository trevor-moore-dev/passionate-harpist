#!/usr/bin/env node
const fetch = require('node-fetch');

async function refreshAPIToken() {
    try {
        const response = await fetch('https://passionate-harpist-api.herokuapp.com/api/Media/RefreshSocialMediaToken');
        if (response.status === 200) {
            console.log('Successfully refreshed social media api access token.')
        } else {
            console.log('Failed to refresh social media api access token.');
        }
    } catch (error) {
        console.log(error);
    }
}

refreshAPIToken();