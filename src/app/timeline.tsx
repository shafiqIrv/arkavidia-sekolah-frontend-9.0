"use client";
import Image from "next/image";
import React from "react";

const Timeline = () => {
    const events = [
        {
            title: "Competition",
            date: "2 November 2022 - 25 Februari 2023",
            highlight: false,
        },
        {
            title: "Arkavidia Academy",
            date: "Coming Soon!",
            highlight: true,
        },
        {
            title: "Arkavidia For Indonesia",
            date: "Coming Soon!",
            highlight: false,
        },
        {
            title: "Arkavidia Goes To School",
            date: "Coming Soon!",
            highlight: true,
        },
        {
            title: "Arkavidia Talks",
            date: "14 Januari 2023 - 4 Februari 2023",
            highlight: false,
        },
        {
            title: "IT Fest",
            date: "24 Februari 2023",
            highlight: false,
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center py-10">
            <h1 className="text-[48px] font-extrabold  mb-8">TIMELINE</h1>
            <div className="flex flex-wrap lg:flex-nowrap gap-[3rem] w-[100vw] px-[100px] items-center justify-center">
                {/* Kiri */}
                <div className="flex flex-col items-center lg:items-start lg:w-[550px] gap-2">
                    <div className="flex gap-[10px] w-[100%] h-[300px]">
                        <div className="border-[1px] border-black flex-shrink-0 flex flex-col-reverse">
                            <Image
                                src="/compe_icon.webp"
                                alt="Icon"
                                width={100}
                                height={100}
                                className="mr-16"
                            />
                        </div>
                        <Image
                            src="/compe_img.webp"
                            alt="Classroom"
                            width={100}
                            height={100}
                            className="border-[1px] border-black w-[100%]  object-cover"
                        />
                    </div>
                    <div className="p-4 bg-[#FAE2DC] rounded-lg shadow-md">
                        <h2 className="text-xl font-extrabold mb-2 text-center">
                            TALKS
                        </h2>
                        <p className="text-sm">
                            Arkavidia Talks merupakan salah satu main event
                            berupa seminar yang mengundang praktisi dan
                            profesional dalam industri teknologi informasi.
                            Tujuan kegiatan ini adalah sebagai media pertukaran
                            ide dari berbagai disiplin yang terkait IT guna
                            menambah wawasan mengenai perkembangan teknologi dan
                            membuka kesempatan untuk kolaborasi. Arkavidia Talks
                            akan terdiri dari dua sesi dengan fokus berbeda
                            dalam bentuk Public Talks (untuk memperkenalkan
                            inovasi teknologi informasi secara general) dan
                            Advanced Talks...
                        </p>
                        <button className="w-[100%] mt-4 bg-[#1f307C] text-white px-4 py-2 rounded hover:bg-[#1f307c97]">
                            Lihat Selengkapnya
                        </button>
                    </div>
                </div>
                {/* Kanan */}
                <div className="w-[40vw] ">
                    <ul className="relative border-l-2 border-black w-[100%]">
                        {events.map((event, index) => (
                            <li
                                key={index}
                                className="mb-6 flex items-center w-[100%]"
                            >
                                <div className="absolute -left-4 w-8 h-8 rounded-full flex items-center justify-center">
                                    <Image
                                        src="/disk.webp"
                                        alt="disk icon"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div
                                    className={`pl-8  w-[100%] py-1 flex justify-center flex-col border border-[#0000002c] ${
                                        event.highlight
                                            ? "bg-[#FEB20E] border border-black"
                                            : ""
                                    }`}
                                >
                                    <h3 className="font-extrabold text-[24px]">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm">{event.date}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
