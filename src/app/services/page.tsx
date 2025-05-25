"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import React from "react"

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
    {
        title: "BSCP",
        label: null,
        logo: "/logo5.jpeg",
        image: "/bg5.jpeg",
    },
    {
        title: "ICCA",
        label: null,
        logo: "/logo6.png",
        image: "/bg6.jpeg",
    },
    {
        title: "CAPE",
        label: null,
        logo: "/logo7.jpeg",
        image: "/bg7.jpeg",
    },
    {
        title: "CWEE",
        label: null,
        logo: "/logo8.jpeg",
        image: "/bg8.jpeg",
    },
    {
        title: "CDSA",
        label: null,
        logo: "/logo9.jpeg",
        image: "/bg9.jpeg",
    },
    {
        title: "CBBH",
        label: null,
        logo: "/logo10.jpeg",
        image: "/bg10.jpeg",
    },
    {
        title: "CPTS",
        label: null,
        logo: "/logo11.jpeg",
        image: "/bg11.jpeg",
    },
    {
        title: "eWPTX",
        label: null,
        logo: "/logo12.png",
        image: "/bg12.jpeg",
    },
    {
        title: "eWPT",
        label: null,
        logo: "/logo13.png",
        image: "/bg13.jpeg",
    },
    {
        title: "eCDFP",
        label: null,
        logo: "/logo14.png",
        image: "/bg14.jpeg",
    },
    {
        title: "eCTHP",
        label: null,
        logo: "/logo15.png",
        image: "/bg15.jpeg",
    },
    {
        title: "eCIR",
        label: null,
        logo: "/logo16.png",
        image: "/bg16.jpeg",
    },
    {
        title: "eCPPT",
        label: null,
        logo: "/logo17.png",
        image: "/bg17.jpeg",
    },
    {
        title: "eJPT",
        label: null,
        logo: "/logo18.png",
        image: "/bg18.jpeg",
    },
]

export default function ServicesSection() {
    return (
        <section className="text-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold mb-10 pt-10">
                    <span className="text-red-600">S</span>ERVICES
                </h2>

                <div className="flex flex-wrap gap-6 justify-center">
                    {services.map((service, idx) => (
                        <Card
                            key={idx}
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

                    ))}
                </div>

                {/* Optional Pagination */}
            </div>
        </section>
    )
}
