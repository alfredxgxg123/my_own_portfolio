const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv/config');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
});


const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.SECRET_USER,
    pass: process.env.SECRET_PASS,
  }
})

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});



app.post('/send', (req, res) => {
  const {name, email, message} = req.body;
  const mailOptions = {
    from: email,
    to: process.env.SECRET_USER,
    subject: name + " " + "has sent you meesage!",
    text: email + " sent you a message:  " + message
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(400).send('fail');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('success');
    }
  }); 
})
app.listen(port, () => console.log(`You are listening at http://localhost:${port}`));