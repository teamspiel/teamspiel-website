const { default: axios } = require("axios");
const formData = require("form-data");
const Mailgun = require("mailgun.js");

const sendEmail = async ({ email, name, message, phone }) => {
  const { REACT_APP_MAIL_TOKEN: apiToken, REACT_APP_MAIL_DOMAIN: domain } =
    process.env;
  const mailgun = new Mailgun(formData).client({
    username: "api",
    key: apiToken,
  });

  const mailData = {
    from: `Website <${email}>`,
    to: "info@lamine-dia.de",
    subject: `Neue Kontaktanfrage von ${name}`,
    html: `<p><strong>${name}</strong> hat folgende Nachricht gesendet:<p><p>${message}</p><br /><p><strong>Telefon:</strong> ${phone}</p><p><strong>E-Mail:</strong> ${email}</p>`,
  };

  await mailgun.messages.create(domain, mailData);
};

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);

    // Validate captcha
    const captchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_RECAPTCHA_SECRET_KEY}&response=${data.captchaToken}`
    );
    if (!captchaResponse.data.success) {
      return {
        statusCode: 401,
        body: JSON.stringify({
          message: "Captcha failed",
        }),
      };
    }

    await sendEmail(data);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Email is on its way",
      }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed sending email" }),
    };
  }
};
