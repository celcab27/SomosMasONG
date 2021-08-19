const sendMail = require('./mailService.js');

process.env.SENDGRID_API_KEY = 'Your_API_HERE';
process.env.SENDGRID_VERIFY_SENDER = 'Your_MAIL_Sender_HERE';

describe('/services/mailService.js - Mail Services Working', () => {
  test('Does can send emails with valid inputs', async () => {
    const msg = {
      to: 'test@example.com',
      from: process.env.SENDGRID_VERIFY_SENDER, // Use the email address or domain you verified above
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      sandboxMode: true
    };
    const result = await sendMail(msg);
    expect(result[0].statusCode).toBe(200);
  });

  test('Returns a 400 status code with invalid credentials', async () => {
    const msg = {
      to: '',
      from: 'Invalid Sender',
      subject: '',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      sandboxMode: true
    };
    const result = await sendMail(msg);
    expect(result.code).toBe(400);
  });
});
