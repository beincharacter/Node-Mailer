"use strict";
const nodemailer = require("nodemailer");

async function main() {
    
  
  let transporter = nodemailer.createTransport({
    host: "smtp.elasticemail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "shubhampalatwork@gmail.com",
      pass: "9C83F61AC86D2FCF8F95CD2FACEDB5B79425", 
    },
  });

  let info = await transporter.sendMail({
    from: `"Fred Foo 👻" <mrdecilionior786@gmail.com>`, // sender address
    to: "shubhampalatwork@gmail.com, beincharacter@gmail.com, actinghours@gmal.com", // list of receivers
    subject: "Hello ✔",
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
