"use strict";
const nodemailer = require("nodemailer");

exports.send = function(to, subject, content) {
  var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "hooheohee@gmail.com",
      pass: "lenimamanbi"
    }
  });

  // setup e-mail data with unicode symbols
  var mailOptions = {
    from: "GoPats", // sender address
    to: to == null ? "hooheohee@gmail.com" : to, // list of receivers
    subject: subject, // Subject line
    text: content // plaintext body
    // html: "<b>Hello world ✔</b>" // html body
  }

  // send mail with defined transport object
  smtpTransport.sendMail(mailOptions, function(error, res) {
    if (error) res.sendStatus(500);
    else res.sendStatus(200);

    smtpTransport.close(); // shut down the connection pool, no more messages
  });
};
