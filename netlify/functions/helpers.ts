import Mailgun from "mailgun.js";
import FormData from "form-data";

interface sendEmailProps {
  email: string;
  name: string;
  message: string;
  phone: string;
}

export const sendEmail = async ({
  email,
  name,
  message,
  phone,
}: sendEmailProps) => {
  const {
    REACT_APP_MAIL_TOKEN: apiToken,
    REACT_APP_MAIL_URL: url,
    REACT_APP_MAIL_DOMAIN: domain,
  } = process.env;

  const mailgun = new Mailgun(FormData).client({
    username: "api",
    key: apiToken as string,
    url: url,
  });

  const mailData = {
    from: `Website <${email}>`,
    to: "lamine@teamspiel.io",
    subject: `Neue Kontaktanfrage von ${name}`,
    html: `<p><strong>${name}</strong> hat folgende Nachricht gesendet:<p><p>${message}</p><br /><p><strong>Telefon:</strong> ${phone}</p><p><strong>E-Mail:</strong> ${email}</p>`,
  };

  await mailgun.messages
    .create(domain as string, mailData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
      throw new Error(err.details);
    });
};
