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
            title: "Industry-Relevant Curriculum ",
            src: "/choose_us1.jpeg",
        },
        {
            title: "Industry-Relevant Curriculum ",
         
            src: "/choose_us1.jpeg",
        },
        {
            title: "Industry-Relevant Curriculum ",
        
            src: "/choose_us1.jpeg",
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