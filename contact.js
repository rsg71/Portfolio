// require("dotenv").config();


// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.USER,
//     pass: process.env.PASSWORD
//   }
// });

// const mailOptions = {
//   from: process.env.USER,
//   to: process.env.SECONDARY,
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });


$("#cform").on("click", function() {
  console.log("clicked")
})