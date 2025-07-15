"use client";

import Image from "next/image";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="relative text-white overflow-hidden min-h-screen">
            <div>
                <ParticlesBackground />
            </div>
            
            {/* Content overlays particles */}
            <div className="relative z-10 pt-12">
                {/* Hero/About Us Section */}
                <section className="px-6 py-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
                    <div className="md:w-1/2 text-left">
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                            <span className="text-red-600">A</span>bout Us
                        </h1>
                        <p className="text-lg text-gray-300">
                            Welcome to LockByte – your trusted destination for expert-led Cyber Security courses.
                            At LockByte, we empower learners with practical knowledge, hands-on skills,
                            and the latest tools to tackle real-world cyber threats. Whether you&apos;re a beginner
                            or a professional, our courses are designed to help you stay ahead in the fast-evolving
                            digital security landscape. Join LockByte and take the first step toward a safer, smarter cyber future.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <Image
                            src="/about-illustration.png"
                            alt="About Us"
                            width={300}
                            height={300}
                            className="w-full max-w-[300px] h-auto mx-auto z-10"
                        />
                    </div>
                </section>

                {/* Our Mission Section */}
                <section className="px-6 py-12 md:flex items-center max-w-6xl mx-auto gap-6">
                    <div className="md:w-1/2">
                        <Image
                            src="/mission.png"
                            alt="Our Mission"
                            width={400}
                            height={400}
                            className="w-full max-w-[350px] h-auto mx-auto z-10"
                        />
                    </div>
                    <div className="md:w-1/2 mt-10 md:mt-0">
                        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
                            <span className="text-red-600">O</span>ur Mission
                        </h2>
                        <p className="text-lg text-gray-300">
                            Our mission at LockByte is to equip individuals with cutting-edge cybersecurity skills
                            through accessible, hands-on education. We strive to build a safer digital world
                            by empowering learners to detect, prevent, and respond to ever-evolving cyber threats with confidence.
                        </p>
                    </div>
                </section>

                {/* Core Values Section */}
                <section className="px-6 py-12 max-w-6xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-4 px-70 py-10">
                        <span className="text-red-600">O</span>ur Core Values
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {[
                            {
                                title: "Innovation",
                                desc: "We embrace cutting-edge technology and creative thinking to deliver forward-focused cybersecurity solutions that evolve with the digital landscape.",
                            },
                            {
                                title: "Collaboration",
                                desc: "We foster teamwork and shared learning, believing that strong partnerships drive impactful education and effective defense against cyber threats.",
                            },
                            {
                                title: "Integrity",
                                desc: "We uphold the highest ethical standards, ensuring trust, transparency, and accountability in every course, interaction, and cybersecurity solution we offer.",
                            },
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="bg-zinc-900 text-gray-100 rounded-xl shadow-md p-6"
                            >
                                <h4 className="text-xl font-semibold mb-2 text-green-400">
                                    {value.title}
                                </h4>
                                <p className="text-gray-400 text-sm">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="px-6 text-white text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-500">
                            Ready to Join Us?
                        </h2>
                        <p className="max-w-xl mx-auto mb-6 text-gray-200">
                            Whether you&apos;re a developer, designer, or just passionate about tech,
                            there&apos;s a place for you in our community.
                        </p>
                        <Link href="/contact">
                            <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-medium cursor-pointer hover:bg-gray-100 transition">
                            Get Involved
                            </button>
                        </Link>
                        
                    </div>
                </section>
            </div>
        </main>    
    );
}