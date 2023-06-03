const express = require('express')
const { getUrl, getUserInfo } = require('./auth')
const { getTokenCredentials } = require('./token')
const { main } = require('./main')
const { getGoogleUserInfo } = require('./googleUserInfo')

const app = express()

app.use(express.static('views/public'))
app.set('view engine', 'ejs')

app.get("/", async (req, res) => {
    res.render('login', {
        authUrl: getUrl()
    })
});


app.get('/authenticate/google',async (req, res) => {
    const { code } = req.query
    const tokens = await getTokenCredentials(code);
    console.log("tokens00000-------------", tokens);
    getUserInfo(tokens);


    // if (code) {
    //     main(code).then((result) => {
    //         res.send({
    //             messsage: "Email is sent",
    //             result
    //         })
    //     }).catch((e) => {
    //         console.log("error whilte sending the email", e);
    //         res.status(400).send({
    //             messsage: "Something went wrong",
    //             e: e.messsage
    //         })
    //     });
    // }
})

app.listen(3000, () => {
    console.log(`Server is up and rujning`);
})


