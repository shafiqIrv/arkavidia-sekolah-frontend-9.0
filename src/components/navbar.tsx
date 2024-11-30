import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

function Navbar() {
    return (
        <nav className="w-[100%] flex justify-center">
            <div className="bg-white h-[6rem] w-[90%] border-[2px] border-[#132757] rounded-full self-center flex justify-between items-center">
                {/* Icon */}
                <div className=" rounded-full w-[50px] h-[50px] flex items-center justify-center ml-10">
                    <Image
                        src="/logo.webp"
                        alt=""
                        width={50}
                        height={50}
                    ></Image>
                </div>
                {/* Content */}
                <div className="flex mr-10 w-[500px] justify-between items-center font-bold text-[#1E3E8A]">
                    <span className="hover:underline decoration-2 hover:underline-offset-8">
                        Home
                    </span>
                    <span className="hover:underline decoration-2 hover:underline-offset-8">
                        Event
                    </span>
                    <span className="hover:underline decoration-2 hover:underline-offset-8">
                        Competition
                    </span>
                    <Button className="bg-white border-[2px] border-[#1E3E8A] text-[#1E3E8A] font-bold h-[3.5rem] rounded-2xl hover:bg-[#1e3e8a31]">
                        Sign In | Sign Up
                    </Button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
