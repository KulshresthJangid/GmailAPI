const axios = require('axios')

const getGoogleUserInfo = async (accessToken) => {
   axios({
        url: 'https://www.googleapis.com/auth/userinfo.profile', 
        method: 'get', 
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
    }).then((result) => {
        console.log("result0-----", result)
    });
}

module.exports = { getGoogleUserInfo }