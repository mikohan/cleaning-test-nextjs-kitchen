"use server";
import { Resend } from "resend";
import Welcome from "@/emails/Welcome";

export type FormState = {
  success?: boolean;
  error?: string;
  message?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (prevState: FormState, formData: FormData) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  const email = formData.get("email") as string;
  const username = formData.get("username") as string;
  const phone = formData.get("phone") as string;
  console.log("First output to console:", email, username, phone);
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Hello world",
      react: Welcome({ username, phone }),
    });
    if (error) {
      console.error(error);
      return { success: false, message: error.message };
    }
    console.log(data);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An unexpected error occured!. Please try again!",
    };
  }
};
