import { Handler } from "@netlify/functions";
import axios from "axios";
import { sendEmail } from "./helpers";

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
      headers: { Allow: "POST" },
    };
  }

  try {
    const data = JSON.parse(event.body as string);

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
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed sending email" }),
    };
  }
};
