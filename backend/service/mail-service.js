const nodeMailer = require('nodemailer');

class MailService {
  constructor() {
    this.transporter = nodeMailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      secure: false,
    });
  }
  async SendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'For activated your acaunt click to link below',
      text: '',
      html: `
          <div>
               <h1> нажмите на ссылку </h1>
               <a href="${link}">${link}</a>
          </div>
         
         `,
    });
  }
}
module.exports = new MailService();
