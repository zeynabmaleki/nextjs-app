import Link from 'next/link';
import React from 'react';

export default function HeroSection() {
    return (
        <section className="relative h-screen overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/pictures/hero-bg.jpg')" }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex items-center justify-end h-full px-4 sm:px-8 md:px-16 lg:px-24">
                <div dir="rtl" className="w-full max-w-2xl text-right ">
                    <h1 className="text-3xl text-zinc-100 sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        چی چی فود، طعم واقعی فست‌فود
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 text-zinc-300">
                        در چی چی فود، تجربه‌ای متفاوت از فست‌فود را خواهید داشت. با استفاده از مواد اولیه تازه، دستورپخت‌های خاص و محیطی گرم و صمیمی، هر وعده غذایی به یک خاطره خوش تبدیل می‌شود. اگر به دنبال طعمی بی‌نظیر و سرویس سریع هستید، چی چی فود انتخاب اول شماست.
                    </p>
                    <Link
                        href="#menu"
                        className="inline-block bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition"
                    >
                        منوی ما را ببینید
                    </Link>
                </div>
            </div>
        </section>
    );
}