"use client";
import { Carousel } from "./ui/carousel";

export const Chooseus = () => {
    const slideData = [
        {
            title: "Industry-Relevant Curriculum ",
            description: "Our courses are built around real-world cyber threats, ensuring you gain skills that employers in today’s industry actively demand.",
            src: "/choose_us1.jpeg",
        },
        {
            title: "No matter your place on the planet, we’re here for you. ",
            src: "/choose_us2.jpeg",
        },
        {
            title: "Boundless Partnerships, Limitless Possibilities. ",
         
            src: "/choose_us3.jpeg",
        },
        {
            title: "Ready whenever you are — just one click away!",
        
            src: "/choose_us4.jpeg",
        },
    ];
    return (
        <>
            <div className="relative overflow-hidden w-full h-full py-20">
                <Carousel slides={slideData} />
            </div>
        </>
    )
}