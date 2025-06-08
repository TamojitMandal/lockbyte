"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Footer } from "@/components/Footer";
import { Chooseus } from "@/components/Chooseus";
import { Card, CardContent } from "@/components/ui/card";
import { SessionProvider } from "next-auth/react"
import PageComponent from "@/components/PageComponent";


// ✅ Declare testimonials here (outside any component)
const testimonials = [
  {
    quote:
      "I enrolled in the Cybersecurity Fundamentals course and it was exactly what I needed to kickstart my career in this field. The instructors were knowledgeable and supportive.",
    name: "John Doe",
    title: "Cybersecurity Analyst Student",
  },
  {
    quote:
      "As someone with no prior experience in cybersecurity, this course provided me with a solid foundation. The hands-on labs were particularly helpful in reinforcing the concepts.",
    name: "Jane Smith",
    title: "Career Transition Student",
  },
  {
    quote:
      "The advanced course helped me prepare for industry certifications. The curriculum is well-structured and covers all the essential topics in depth.",
    name: "Mike Johnson",
    title: "Security Operations Specialist",
  },
  {
    quote:
      "From beginner to advanced, the structure and support of these courses are unmatched. Highly recommend for anyone serious about cyber security.",
    name: "Sarah Kim",
    title: "Network Security Engineer",
  },
  {
    quote:
      "Loved the animations, clarity, and industry relevance. It felt like getting real-world training in a very engaging format.",
    name: "Akash Mehta",
    title: "Ethical Hacking Intern",
  },
];
const services = [
  {
    title: "MCRTA",
    label: null,
    logo: "/logo1.png",
    image: "/bg1.jpg",
  },
  {
    title: "CRTS V2",
    label: null,
    logo: "/logo2.png",
    image: "/bg2.jpeg",
  },
  {
    title: "CRTA",
    label: null,
    logo: "/logo3.png",
    image: "/bg3.jpeg",
  },
  {
    title: "RED TEAM OPS I",
    label: null,
    logo: "/logo4.png",
    image: "/bg4.jpeg",
  },
];

export default function Home() {

  return (
    <main>
      {/* HERO SECTION */}
      <section className="min-h-screen text-white flex items-center px-8 py-8 gap-10">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 ">
          {/* Left Text Content */}
          <div className="text-left pt-20 mx-10">
            <h1 className="text-9xl font-extrabold mb-4">
              <span className="text-red-600">L</span>OCK
              <span className="text-red-600">B</span>YTE
            </h1>
            <p className="text-gray-300 text-4xl mb-6 pt-5">
              Gear up with
              <br />
              cutting-edge courses for <br />
              cyber warriors of tomorrow.
            </p>
            <div className="flex space-x-4 pt-9">
              <Link href="/services">
                <Button className="bg-white text-black text-xl hover:bg-gray-200">
                  Explore Services
                </Button>
              </Link>
              <div>
                <SessionProvider>
                  <PageComponent />
                </SessionProvider>

              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-120 h-120 md:h-[600px] opacity-75 mx-60">
            <Image
              src="/hero-hacker-modified.png"
              alt="Hacker illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
      {/* WHY TO CHOOSE US SECTION */}

      <div>
        <h2 className="text-6xl font-bold text-white mb-3 mx-16">
          <span className="text-red-600">W</span>HY TO CHOOSE US
        </h2>
        <Chooseus />

      </div>

      {/* EXPLORE SERVICES SECTION */}
      <div className="pt-20">
        <h2 className="text-6xl font-bold text-white mb-3 mx-16">
          <span className="text-red-600">E</span>XPLORE OUR SERVICES
        </h2>
        <div className="flex flex-wrap gap-4 justify-center pt-20 pb-10">
          {services.map((service, index) => (
            <Link href={"/services"} key={service.title}>
              <Card
                key={index}
                className="w-[300px] h-[200px] rounded-xl relative overflow-hidden text-white shadow-lg"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <CardContent className="absolute inset-0 bg-black/50 flex flex-row items-left justify-start text-center px-4">
                  {/* Optional badge at top-left if label exists */}
                  {service.label && (
                    <div className="absolute top-3 left-3 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                      {service.label}
                    </div>
                  )}

                  {/* Logo image */}
                  {service.logo && (
                    <Image
                      src={service.logo}
                      alt={`${service.title} logo`}
                      width={130}
                      height={130}
                      className="mt-8 mb-8 hover:h-30 hover:w-30 flex justify-end items-center"
                    />
                  )}

                  {/* Title in center */}
                  <h3 className="text-2xl font-semibold flex justify-end item-center mx-6 mt-20">{service.title}</h3>
                </CardContent>
              </Card>
            </Link>

          ))}
        </div>
        <div className="flex justify-end pr-8">
          <Link href="/services">
            <Button
              variant="outline"
              className=" bg-red-600 text-white text-2xl hover:bg-white hover:text-red-600"
            >
              show more →
            </Button>
          </Link>
        </div>
      </div>

      {/* TESTIMONIALS SECTION */}
      <section className="container px-4 py-16 mx-auto pt-30" id="testimonials">
        <h2 className="text-6xl font-bold text-white mb-8 mx-16">
          <span className="text-red-600">T</span>ESTIMONIALS
        </h2>

        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="normal"
          pauseOnHover={true}
          className="dark:bg-black pt-10"
        />
      </section>

      {/*FOOTER SECTION */}
      <Footer />
    </main>
  );
}
