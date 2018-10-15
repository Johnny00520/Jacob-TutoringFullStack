const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
// var sslRedirect = require('heroku-ssl-redirect');

// require('dotenv').config();

// app.use(sslRedirect()); // Redirect http to https

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// We don't need this if statement to perform the sending emails
if (process.env.NODE_ENV === 'production') {

    // Express will serve up production assets like out main.js file, or main.css file
    app.use(express.static('jacob-rf-client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'jacob-rf-client', 'build', 'index.html'));
    });

    app.post('/api/form', (req, res) => {
            nodemailer.createTestAccount((err, account) => {
            const htmlEmail = `
                <h3>Contact Detail</h3>
                <h2>${req.body.subject}</h2>
                <ul>
                    <li>Name: ${req.body.name}</li>
                    <li>Email: ${req.body.email}</li>
                </ul>
                <h3>Message</h3>
                <p>${req.body.message}</p>
            `

            let transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    type: 'OAuth2',
                    user: 'jacobwithrow@gmail.com', // This should be the email addr with the enable API
                    clientId: process.env.GOOGLE_CLIENT_ID,
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
                    accessToken: process.env.GOOGLE_ACCESS_TOKEN,
                },
            });

            let mailOptions = {
                to: 'jacobwithrow@gmail.com',
                subject: req.body.subject,
                replyTo: req.body.email,
                text: req.body.message,
                html: htmlEmail
            }

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    return console.log('err: ', err)
                }
                else {
                    console.log('Message sent: %s', info.message)
                    console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
                }
            });
        });
    });
}


const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`)
});