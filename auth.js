const { google } = require('googleapis');
const credentials = require('./credentials.json');

const { client_secret, client_id, redirect_uris } = credentials.web;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

const GMAIL_SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

const getUrl = () => {
    return oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      prompt: 'consent',
      scope: GMAIL_SCOPES,
    });
}

module.exports  = { getUrl }

