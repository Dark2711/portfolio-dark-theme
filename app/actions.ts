"use server"
import nodemailer from "nodemailer"
export async function submitContactForm(formData: FormData) {
  // Simulate a delay
  // await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Setup Nodemailer transporter (Use environment variables in production)
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use another service if needed
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your app password
    },
  })

   // Email options
   const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "princekumar7406@gmail.com", // Change this to your recipient email
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return {
      message: "Thanks for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      message: "Something went wrong. Please try again later.",
    }
  }
}

