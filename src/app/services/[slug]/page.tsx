import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ServiceDetail(props: Props) {
    const { slug } = await props.params;
    const service = services.find((s) => s.slug === slug);

    if (!service) return notFound();

    return (
        <>
        <ParticlesBackground />
        <div className="text-white pt-12">
            <h1 className="text-5xl font-bold p-5 mx-15 ">{service.title}</h1>
            <div className="flex flex-row p-10 pl-20 pr-10">
                <Image
                    src={service.image}
                    alt={`${service.title} image`}
                    className="rounded-lg mb-6 h-120 w-150 pt-5 flex justify-start"
                    width={150}
                    height={120}
                />
                <div className="pt-5 pl-15 max-w-2xl">
                    <p>{service.description}</p>
                    <p className="max-w-78 mt-5">{service.features}</p>
                    <div className="pt-4 flex flex-row m-5 space-x-10">
                        <Button
                            variant="outline"
                            className=" bg-red-600 text-white text-2xl hover:bg-white hover:text-red-600"
                        >
                            {service.price}
                        </Button>
                        <Link href={"https://t.me/your_channel"}>
                            <Button
                                variant="outline"
                                className=" bg-red-600 text-white text-xl hover:bg-white hover:text-red-600"
                            >
                                BUY SERVICE
                            </Button>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
        </>
    );
}
