const path = require('path');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 3003;

// create a server for sending emails from the 'contact form'
const app = express();
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ message: "Hello, welcome to Joat portfolio" });
})

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAILS_PASS
    }
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to send');
    }
});

app.post('/contact', bodyParser.urlencoded({ extended: false }), (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;

    const mailOptions = {
        from: name,
        to: process.env.EMAIL_ADDRESS,
        subject: 'Portfolio Contact Form Submission',
        html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}<\p>
        <p>Message: ${message}</p>
        `
    }
    contactEmail.sendMail(mailOptions, (error) => {
        if(error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message sent!" });
        }
    })
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}`);
});