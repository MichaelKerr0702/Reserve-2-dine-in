const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

router.post("/register", (req, res) => {
  const { email } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "sending email with react and nodejs",
      html: "<h1>Congratulation You successfully sent email</h1>",
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error", error);
      } else {
        console.log("Email sent" + info.response);
        res.status(201).json({ status: 201, info });
      }
    });
  } catch (error) {
    res.status(401).json({ status: 401, info });
  }
});

module.exports = router;
