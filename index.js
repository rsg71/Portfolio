const express = require("express");
var path = require("path");
require("dotenv").config();

const bodyParser = require("body-parser");

const nodemailer = require("nodemailer")

const app = express();
const port = 3000;

//parse application
app.use(bodyParser.urlencoded({extended: false}))

//parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname));


app.get("/Portfolio/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/Portfolio/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "contact.html"));
})

app.get("/Portfolio/portfolio", (req, res) => {
    res.sendFile(path.join(__dirname, "portfolio.html"));
})

app.post("/", (req, res) => {
    // console.log('on the backend')
    console.log(req.body)
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const message = req.body.message
    const clientEmailAddress = req.body.email


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.USER,
          pass: process.env.PASSWORD
        }
      });
      
      const mailOptions = {
        from: clientEmailAddress,
        to: process.env.SECONDARYUSER,
        subject: 'Contact Page Email Notification',
        html: `<p>Name: ${firstName} ${lastName}</p>
               <p>Email: ${clientEmailAddress}</p>
               <p>Message: ${message}</p>`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      res.sendFile(path.join(__dirname, "contact.html"));
})

app.listen(port, () => console.log(`app is listening on port ${port}`))