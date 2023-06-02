const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');
const credentials = require('./credentials.json');

// Replace with the code you received from Google
const { client_secret, client_id, redirect_uris } = credentials.web;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

const getTokenCredentials = (code) => {
    return new Promise((resolve, reject) => {
      oAuth2Client.getToken(code)
        .then(({ tokens }) => {
          console.log('Access token and refresh token stored to token.json', tokens);
          resolve(tokens);
        })
        .catch((error) => {
          console.error('Error while getting tokens:', error);
          reject(error);
        });
    });
  };

module.exports = { getTokenCredentials }
