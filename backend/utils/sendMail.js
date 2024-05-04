const sendMail = async (mailOption) => {
  const transporter = nodemailer.createTransport({

    host: 'smtp-mail.outlook.com',
    secureConnection:false,
    port:587,
    auth: {
      user: process.env.MAIL,
      pass: process.env.MAIL_PASSWORD,
    },
    tls: {
        ciphers:'SSLv3'
    }
  });

  const mailOptions = mailOption

  return transporter.sendMail(mailOptions);

};

module.exports=sendMail