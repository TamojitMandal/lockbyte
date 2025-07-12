import React from "react";
import { ParticlesBackground } from "@/components/ParticlesBackground";


export default function AboutUsSection() {
    return (
        <> 
        <ParticlesBackground />
        <section className="text-white py-20">
            <div className="container mx-auto px-4 sm:px-10">
                <h1 className="text-6xl text-white font-bold pt-12 mb-8">
                    <span className="text-red-600">A</span>BOUT US
                </h1>

                <div className="flex justify-center flex-col md:flex-row gap-6 pl-40 pr-40">
                    {/* Left: Website Info */}
                    <div className="bg-[#1c1c1c] p-6 rounded-xl w-130 h-100">
                        <h3 className="text-center text-2xl font-semibold mb-2">Our Website</h3>
                        <p className="text-xl text-gray-300 pt-5 text-left w-90 gap-4 pl-7">
                            Lockbyte is a next-gen platform empowering learners with
                            cutting-edge cybersecurity and tech courses, crafted by experts to
                            build real-world skills for tomorrow’s digital defenders and ethical
                            hackers.
                        </p>
                    </div>

                    {/* Right: Stats */}
                    <div className="flex flex-wrap gap-4 w-30 h-100 md:w-2/3">
                        <div className="bg-[#1c1c1c] p-6 rounded-xl text-center flex-1 min-w-[calc(50%-0.5rem)]">
                            <p className="text-2xl text-center font-bold pt-5">2k+</p>
                            <p className="text-sm text-gray-400">Courses</p>
                        </div>
                        <div className="bg-[#1c1c1c] p-6 rounded-xl text-center flex-1 min-w-[calc(50%-0.5rem)]">
                            <p className="text-2xl font-bold pt-5">50k+</p>
                            <p className="text-sm text-gray-400">
                                Courses bought <br /> Last year
                            </p>
                        </div>
                        <div className="bg-[#1c1c1c] p-6 rounded-xl text-center flex-1 min-w-[calc(50%-0.5rem)]">
                            <p className="text-2xl font-bold pt-5">5k+</p>
                            <p className="text-sm text-gray-400">5 star <br /> Reviews</p>
                        </div>
                        <div className="bg-[#1c1c1c] p-6 rounded-xl text-center flex-1 min-w-[calc(50%-0.5rem)] flex items-center justify-center">
                            <p className="text-md text-gray-300 pb-10">and,<br />much more…</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
