"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "@/app/server/contact"
import { useFormStatus } from "react-dom"
import { AlertCircle, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faTelegramPlane, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { ParticlesBackground } from "@/components/ParticlesBackground";

// Submit button with loading state
function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={pending}>
      {pending ? "SENDING..." : "SUBMIT"}
    </Button>
  )
}

export default function Contact() {
  const { toast } = useToast()
  const [formState, setFormState] = useState<{
    message: string
    success: boolean
    submitted: boolean
  }>({
    message: "",
    success: false,
    submitted: false,
  })

  async function handleSubmit(formData: FormData) {
    const response = await submitContactForm(formData)

    setFormState({
      message: response.message,
      success: response.success,
      submitted: true,
    })

    if (response.success) {
      // Show toast notification on success
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully!",
        variant: "default",
      })

      // Reset form on success
      const form = document.getElementById("contact-form") as HTMLFormElement
      form.reset()
    } else {
      // Show error toast
      toast({
        title: "Error",
        description: response.message,
        variant: "destructive",
      })
    }
  }

  return (
    <>
    <ParticlesBackground />
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-6xl text-white font-bold pt-12 mb-8 mx-53">
        <span className="text-red-600">C</span>ONTACT US
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-start mx-50 gap-8">
        {/* Left Section */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-8 w-120 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-start items-start min-w-200 gap-8 mx-8">
            {/* Left Section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl text-white font-bold mb-4">Chat With Us</h2>
              <p className="text-gray-400 mb-6">
                Our team is here to help you with any questions or concerns.
              </p>

              {/* Call Info */}
              <div className="mb-6">
                <h3 className="text-lg text-white font-semibold mb-1">Call Us</h3>
                <p className="text-gray-400">24x7 Ready to pick up your call</p>
                <p className="text-gray-300">(+91) 9999999999</p>
              </div>

              {/* Email Info */}
              <div className="mb-6">
                <h3 className="text-lg text-white font-semibold mb-1">Email</h3>
                <p className="text-gray-400">We&apos;ll respond as soon as possible</p>
                <p className="text-gray-300">lockbyte@gmail.com</p>
              </div>

              {/* Social Icons */}
              <div className="mt-6">
                <h3 className="text-lg text-white font-semibold mb-3">Socials</h3>
                <div className="flex space-x-4">
                  <a href="https://twitter.com/your_handle" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faXTwitter} className="text-white w-6 h-6" />
                  </a>
                  <a href="https://t.me/your_channel" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTelegramPlane} className="text-white w-6 h-6" />
                  </a>
                  <a href="https://discord.gg/your_invite_code" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faDiscord} className="text-white w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-2 text-left mx-8 text-sm text-gray-500">
            © Created by TEAM LOCKBYTE
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full md:w-1/2">
          <p className="w-110 text-gray-400 mb-6">
            If you have any questions or inquiries, feel free to contact us.
            We&apos;ll get back to you as soon as possible.
          </p>

          {formState.submitted && (
            <div
              className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${formState.success ? "bg-green-900/20 text-green-400" : "bg-red-900/20 text-red-400"
                }`}
            >
              {formState.success ? (
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              )}
              <p>{formState.message}</p>
            </div>
          )}

          <form id="contact-form" action={handleSubmit} className="space-y-4 w-120">
            <div>
              <label htmlFor="firstName" className="text-white block text-sm mb-1">
                First Name
              </label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                className="text-white bg-gray-900 border-gray-800"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="text-white block text-sm mb-1">
                Last Name
              </label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                className="text-white bg-gray-900 border-gray-800"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="text-white block text-sm mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                className="text-white bg-gray-900 border-gray-800"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="text-white block text-sm mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                className="text-white bg-gray-900 border-gray-800 min-h-[100px]"
                required
              />
            </div>

            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
