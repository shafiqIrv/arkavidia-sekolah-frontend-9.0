import Image from "next/image";
import Timer from "./timer";
import Link from "next/link";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Timeline from "./timeline";

export default function Home() {
    return (
        <div>
            {/* Main */}
            <section className="flex justify-center items-center h-[100vh] w-full bg-[#233077] bg-[length:75px_75px] bg-[linear-gradient(90deg,_transparent_74px,_#6C78B9_74px,_#6C78B9_75px),_linear-gradient(transparent_74px,_#6C78B9_74px,_#6C78B9_75px)]">
                <Image
                    className="absolute top-[8rem] left-[4rem]"
                    src="/cewek.svg"
                    alt=""
                    width={250}
                    height={250}
                ></Image>
                <Image
                    className="absolute bottom-[8rem] right-[4rem]"
                    src="/cowok.svg"
                    alt=""
                    width={250}
                    height={250}
                ></Image>
                {/* Tulisan Arkav */}
                <div className="z-10">
                    <div className="w-[550px] pl-[1.5rem] py-[1.5rem] bg-black  flex items-center justify-start gap-[0.75rem]">
                        <div className="w-[20px] h-[20px] bg-red-600 rounded-full"></div>
                        <div className="w-[20px] h-[20px] bg-yellow-500 rounded-full"></div>
                        <div className="w-[20px] h-[20px] bg-green-700 rounded-full"></div>
                    </div>
                    <div className="w-[550px] h-[230px] border-black border-[6px] gap-[1rem] bg-white items-center flex flex-col  justify-center">
                        <h1 className="text-black font-bold text-[3.5rem]">
                            ARKAVIDIA 8.0
                        </h1>
                        <div className="bg-black px-[1.5rem] py-[1rem] rounded-xl">
                            <h2 className="text-white font-bold">
                                IT & Informatics Festival
                            </h2>
                        </div>
                        <div className="flex flex-col"></div>
                    </div>
                </div>
                {/* Tombol Explore */}
                <Link href="#timer" className=" bottom-[2rem] absolute ">
                    <button className=" shadow-[4px_10px_0px_#000] bg-white w-[6rem] h-[6rem] rounded-xl gap-[0.5rem] flex flex-col items-center justify-center">
                        <div className="flex justify-center">
                            <Image
                                className="rotate-90 animate-bounce"
                                src="/right-arrow.png"
                                alt=""
                                width={30}
                                height={30}
                            />
                        </div>

                        <span className="font-bold text-[#233077]">
                            Explore
                        </span>
                    </button>
                </Link>
            </section>
            {/* Timer */}
            <section id="timer" className="w-full ">
                <div className="w-full overflow-hidden">
                    <p className="whitespace-nowrap overflow-hidden font-bold py-1">
                        CLOSE REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION
                        CLOSE REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION
                        CLOSE REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION
                        CLOSE REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION
                        CLOSE REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION
                        CLOSE REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION
                        CLOSE REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION
                        CLOSE REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION
                    </p>
                </div>
                <Timer />
            </section>
            {/* Penjelasan */}
            <section className=" flex items-center justify-center py-[5rem] ">
                {/* INFO */}
                <div className="flex flex-col ">
                    <div className="flex flex-col   ">
                        <span className="mb-[3px] -rotate-3 w-fit text-white font-bold bg-black px-[4rem] py-[0.8rem]  ">
                            ADAPTIVE COLABORATION
                        </span>
                        <span className="-rotate-1 w-fit text-white font-bold bg-black px-[4rem] py-[0.8rem]  ">
                            TO ENCOUNTER
                        </span>
                        <span className="ml-14 items-end -rotate-3 w-fit text-white font-bold bg-black px-[4rem] py-[0.8rem]  ">
                            DIGITAL DISTRUPTION
                        </span>
                    </div>
                    <p className="w-[50%] text-justify ml-14 mt-6">
                        Arkavidia merupakan acara IT tahunan yang diadakan oleh
                        Himpunan Mahasiswa Informatika ITB. Dengan tema
                        “Adaptive Collaboration to Encounter Digital
                        Disruption”, Arkavidia 8.0 diharapkan akan lebih banyak
                        individu sadar akan hak dan kewajibannya di dunia
                        digital, sehingga dapat mewujudkan kemerdekaan digital
                        bagi dirinya. Diharapkan dengan diadakannya acara ini,
                        dapat memberikan manfaat bagi pelajar, civitas akademik,
                        dan masyarakat umum seluruh Indonesia.
                    </p>
                </div>
                {/* CAROUSEL */}
                <div>
                    <Carousel className="w-full max-w-xs mr-[16rem]">
                        <CarouselContent>
                            {Array.from({ length: 3 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <Image
                                                    className="rounded-xl"
                                                    src={`/carousel${
                                                        index + 1
                                                    }.webp`}
                                                    alt=""
                                                    width={250}
                                                    height={250}
                                                ></Image>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </section>
            {/* Cards */}
            <section>
                <div className="w-[70vw] h-[280px] flex justify-between gap-4">
                    {/* Hiasan */}
                    <div className="w-[10%] border-black border-[2px]  bg-[#FFEADF] flex flex-col-reverse">
                        <Image
                            src="/Mask group.webp"
                            alt=""
                            width={100}
                            height={100}
                        ></Image>
                    </div>
                    {/* card */}
                    <div className="grow p-4 border-black border-[2px] flex flex-col items-center bg-red-600">
                        <h3 className="font-bold text-[4rem] bg-[#FFEADF] border-black border-[2px] py-[2rem] w-[100%] text-center ">
                            412
                        </h3>
                        <div className="flex flex-col items-center text-white h-[100%]  justify-center">
                            <span>PAST</span>
                            <span className="font-bold">PARTICIPANTS</span>
                        </div>
                    </div>
                    {/* card */}
                    <div className="grow p-4 border-black border-[2px] flex flex-col items-center bg-blue-700">
                        <h3 className="font-bold text-[4rem] bg-[#FFEADF] border-black border-[2px] py-[2rem] w-[100%] text-center ">
                            329
                        </h3>
                        <div className="flex flex-col items-center text-white h-[100%] justify-center">
                            <span></span>
                            <span className="font-bold">COMMITTESS</span>
                        </div>
                    </div>
                    {/* card */}
                    <div className="grow p-4 border-black border-[2px] flex flex-col items-center bg-green-700">
                        <h3 className="font-bold text-[4rem] bg-[#FFEADF] border-black border-[2px] py-[2rem] w-[100%] text-center ">
                            69
                        </h3>
                        <div className="flex flex-col items-center text-white h-[100%] justify-center">
                            <span>PAST</span>
                            <span className="font-bold">PARTNERS</span>
                        </div>
                    </div>
                    <div className="w-[10%] border-black border-[2px]  bg-[#FFEADF] flex flex-col-reverse items-end">
                        <Image
                            src="/Mask group (1).webp"
                            alt=""
                            width={100}
                            height={100}
                        ></Image>
                    </div>
                </div>
            </section>
            {/* TIMELINE */}
            <section className="mb-5 mt-5">
                <Timeline></Timeline>
            </section>

            {/* FOOTER */}
            <footer className="border-t-black border-t-[20px]  flex justify-center items-center h-[30vh] w-full bg-[#F43518] bg-[length:75px_75px] bg-[linear-gradient(90deg,_transparent_74px,_#000000_74px,_#000000_75px),_linear-gradient(transparent_74px,_#000000_74px,_#000000_75px)]">
                <div className="bg-white w-[585px] flex border-2 border-black">
                    <div className="p-2  flex border-r-2 border-r-black">
                        <Image
                            alt="icon arkav"
                            src="/logo.webp"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="font-extrabold text-[24px] border-b-2 bg-black text-white grow border-b-black w-[100%] flex items-center justify-center ">
                            <h3>ARKAVIDIA 8.0</h3>
                        </div>
                        <div className=" bg-[#069154] font-bold w-[100%] flex items-center justify-center grow ">
                            <span className="text-center">
                                ADAPTIVE COLLABORATION TO ENCOUNTER DIGITAL
                                DISRUPTION
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
