const express = require('express')
const { getUrl } = require('./auth')
const { getTokenCredentials } = require('./token')
const { main } = require('./main')

const app = express()

app.use(express.static('views/public'))
app.set('view engine', 'ejs')

app.get("/",async (req, res) => {
    const { code } = req.query
    if(code) {
        main(code).then((result) => {
            res.send({
                messsage: "Email is sent", 
                result
            })
        }).catch((e) => {
            console.log("error whilte sending the email", e);
            res.status(400).send({
                messsage: "Something went wrong", 
                e: e.messsage
            })
        });
    } else {
        res.render('login', {
            authUrl: getUrl()
        })
    }
});

app.listen(3000, () => {
    console.log(`Server is up and rujning`);
})


