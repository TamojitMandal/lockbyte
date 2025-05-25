"use server"

import { Resend } from "resend"

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Define the shape of our form data
export type ContactFormData = {
  firstName: string
  lastName: string
  email: string
  message: string
}

// Define the response type
export type ContactFormResponse = {
  success: boolean
  message: string
}

export async function submitContactForm(formData: FormData): Promise<ContactFormResponse> {
  try {
    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return {
        success: false,
        message: "All fields are required",
      }
    }

    if (!email.includes("@")) {
      return {
        success: false,
        message: "Please enter a valid email address",
      }
    }

    // In testing mode, Resend only allows sending to your own email
    // For production, you would use your verified domain
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Use Resend's testing email
      to: "tamojitm23@gmail.com", // The verified email address (yours)
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        
        Message:
        ${message}
        
        Note: This is a contact form submission from your website. The user would expect a response at their email: ${email}
      `,
      replyTo: email,
    })

    if (error) {
      console.error("Error sending email:", error)

      // Check for specific Resend errors
      if (error.message?.includes("verify a domain")) {
        return {
          success: false,
          message: "Email service is in test mode. In production, this would send an email to our support team.",
        }
      }

      return {
        success: false,
        message: "Failed to send your message. Please try again later.",
      }
    }

    // Add success return statement
    return {
      success: true,
      message: "Your message has been sent successfully!",
    }
  } catch (error) {
    console.error("Error in contact form submission:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
