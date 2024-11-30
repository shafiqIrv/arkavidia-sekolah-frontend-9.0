"use client";
import { useState, useEffect } from "react";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const Timer: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const countdownDate = new Date("2024-12-31T00:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ),
                minutes: Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                ),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center bg-black text-white py-10">
            <div className="flex space-x-4">
                <TimeBox value={timeLeft.days} label="DAYS" />
                <TimeBox value={timeLeft.hours} label="HOURS" />
                <TimeBox value={timeLeft.minutes} label="MINUTES" />
                <TimeBox value={timeLeft.seconds} label="SECONDS" />
            </div>
            <button className="mt-6 px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition duration-300">
                Register Now
            </button>
        </div>
    );
};

interface TimeBoxProps {
    value: number;
    label: string;
}

const TimeBox: React.FC<TimeBoxProps> = ({ value, label }) => (
    <div className="flex flex-col items-center">
        <div className="bg-white text-black rounded-lg w-16 h-20 flex items-center justify-center text-3xl font-bold">
            {value}
        </div>
        <span className="mt-2 text-sm font-semibold">{label}</span>
    </div>
);

export default Timer;
