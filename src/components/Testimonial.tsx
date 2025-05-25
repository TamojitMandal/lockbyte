"use client"

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "This platform changed my career trajectory!",
      name: "Alice Johnson",
      title: "Ethical Hacker",
    },
    {
      quote: "Hands down, the best cybersecurity training I've ever taken.",
      name: "David Smith",
      title: "Security Analyst",
    },
    {
      quote: "Practical, in-depth, and up-to-date with industry needs.",
      name: "Priya Desai",
      title: "Penetration Tester",
    },
    {
      quote: "The labs were amazing and helped me pass my certification!",
      name: "Lucas Chen",
      title: "SOC Analyst",
    },
  ]

  return (
    <div className="py-20 bg-black text-white">
      <h2 className="text-center text-3xl font-bold mb-10">What Our Learners Say</h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
        pauseOnHover={true}
        className="mx-auto"
      />
    </div>
  )
}
