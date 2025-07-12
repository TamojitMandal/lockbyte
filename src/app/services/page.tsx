"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
    { title: "MCRTA", slug: "mcrta", label: null, logo: "/logo1.png", image: "/bg1.jpg" },
    { title: "CRTS V2", slug: "crts-v2", label: null, logo: "/logo2.png", image: "/bg2.jpeg" },
    { title: "CRTA", slug: "crta", label: null, logo: "/logo3.png", image: "/bg3.jpeg" },
    { title: "CRTO", slug: "crto", label: null, logo: "/logo4.png", image: "/bg4.jpeg" },
    { title: "CRTL", slug: "crtl", label: null, logo: "/logo19.png", image: "/bg19.jpeg" },
    { title: "BSCP", slug: "bscp", label: null, logo: "/logo5.jpeg", image: "/bg5.jpeg" },
    { title: "ICCA", slug: "icca", label: null, logo: "/logo6.png", image: "/bg6.jpeg" },
    { title: "CAPE", slug: "cape", label: null, logo: "/logo7.jpeg", image: "/bg7.jpeg" },
    { title: "CWEE", slug: "cwee", label: null, logo: "/logo8.jpeg", image: "/bg8.jpeg" },
    { title: "CDSA", slug: "cdsa", label: null, logo: "/logo9.jpeg", image: "/bg9.jpeg" },
    { title: "CBBH", slug: "cbbh", label: null, logo: "/logo10.jpeg", image: "/bg10.jpeg" },
    { title: "CPTS", slug: "cpts", label: null, logo: "/logo11.jpeg", image: "/bg11.jpeg" },
    { title: "eWPTX", slug: "ewptx", label: null, logo: "/logo12.png", image: "/bg12.jpeg" },
    { title: "eWPT", slug: "ewpt", label: null, logo: "/logo13.png", image: "/bg13.jpeg" },
    { title: "eCDFP", slug: "ecdfp", label: null, logo: "/logo14.png", image: "/bg14.jpeg" },
    { title: "eCTHP", slug: "ecthp", label: null, logo: "/logo15.png", image: "/bg15.jpeg" },
    { title: "eCIR", slug: "ecir", label: null, logo: "/logo16.png", image: "/bg16.jpeg" },
    { title: "eCPPT", slug: "ecppt", label: null, logo: "/logo17.png", image: "/bg17.jpeg" },
    { title: "eJPT", slug: "ejpt", label: null, logo: "/logo18.png", image: "/bg18.jpeg" },
    { title: "CRTP", slug: "crtp", label: null, logo: "/logo20.png", image: "/bg20.jpeg" },
    { title: "CPENT", slug: "cpent", label: null, logo: "/logo21.png", image: "/bg21.jpeg" },
    { title: "LPT(MASTER)", slug: "lpt", label: null, logo: "/logo22.png", image: "/bg22.jpeg" },

];

export default function ServicesSection() {
    return (
        <>
        <ParticlesBackground />
        <section className="text-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold mb-10 pt-10">
                    <span className="text-red-600">S</span>ERVICES
                </h2>
                <div className="flex flex-wrap gap-6 justify-center">
                    {services.map((service, idx) => (
                        <Link
                            key={idx}
                            href={`/services/${service.slug}`}
                            className="hover:scale-105 transition-transform duration-300"
                        >
                            <Card
                                className="w-[300px] h-[200px] rounded-xl relative overflow-hidden text-white shadow-lg"
                                style={{
                                    backgroundImage: `url(${service.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <CardContent className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-4">
                                    {service.label && (
                                        <div className="absolute top-3 left-3 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                                            {service.label}
                                        </div>
                                    )}
                                    {service.logo && (
                                        <Image
                                            src={service.logo}
                                            alt={`${service.title} logo`}
                                            width={100}
                                            height={100}
                                            className="mb-4"
                                        />
                                    )}
                                    <h3 className="text-2xl font-semibold text-center">
                                        {service.title}
                                    </h3>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}
