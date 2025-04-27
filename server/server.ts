import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { Resend } from "resend";
import { render } from "@react-email/render";
import React from "react";
import ContactEmail from "./emails/ContactEmail";
import fetch from "node-fetch";

interface RecaptchaResponse {
  success: boolean;
  score: number;
  action: string;
  challenge_ts: string;
  hostname: string;
  "error-codes"?: string[];
}

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
    methods: "POST",
    allowedHeaders: ["Content-Type"],
  })
);
app.use(bodyParser.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send-email", async (req: Request, res: Response): Promise<void> => {
  const { name, email, message, recaptchaToken } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  if (!recaptchaToken) {
    res.status(400).json({ error: "reCAPTCHA token missing" });
    return;
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

  try {
    const recaptchaRes = await fetch(verificationURL, { method: "POST" });
    const recaptchaData = (await recaptchaRes.json()) as RecaptchaResponse;

    if (!recaptchaData.success) {
      res.status(400).json({ error: "Failed reCAPTCHA verification" });
      return;
    }

    if (recaptchaData.score < 0.5) {
      res.status(400).json({ error: "Low reCAPTCHA score. Potential bot" });
      return;
    }

    console.log("reCAPTCHA verification:", recaptchaData);

    const emailHtml = await render(
      React.createElement(ContactEmail, { name, email, message })
    );

    await resend.emails.send({
      from: "Email from Jonathan Portfolio <onboarding@resend.dev>",
      to: ["jonathanbrancopereira@gmail.com"],
      subject: "New Contact Form Submission",
      html: emailHtml,
    });

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
