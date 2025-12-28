"use server";
import ManagerTable from "./../emails/ManagerTable";
import { Resend } from "resend";
import Manager from "@/emails/Manager";

export type FormState = {
  success?: boolean;
  error?: string;
  message?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (prevState: FormState, formData: FormData) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
  const email = formData.get("email") as string;
  const username = formData.get("username") as string;
  const phone = formData.get("phone") as string;
  const couch = formData.get("couch") as string;
  // const fromEmail = "Acme <onboarding@resend.dev>"
  const fromEmail = "Angara Steamers <info@angaracleaning.com>";
  const nowDate = new Date();
  const orderTime = nowDate.toLocaleString();
  console.log(orderTime);

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [process.env.COMPANY_EMAIL || "angaralabllc@gmail.com"],
      subject: "Angara Steamers New Lead",
      react: ManagerTable({ username, phone, email, couch, orderTime }),
    });
    if (error) {
      console.error(error);
      return { success: false, message: error.message };
    }
    // console.log(data);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An unexpected error occured!. Please try again!",
    };
  }
};
