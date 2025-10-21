import React from 'react'
import Image from 'next/image'

export default function AboutUs() {
    return (
        <section
            id="about"
            className="scroll-mt-14 lg:scroll-mt-0 bg-zinc-800 min-h-screen px-10 py-14 max-md:px-5 max-md:py-10 text-stone-400 flex items-center"
        >
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row-reverse items-center justify-center gap-10 lg:gap-20">

                <div className="relative w-full max-w-xs flex items-center justify-center">
                    {/* Circle background */}
                    <div className="absolute w-72 h-72 rounded-full bg-indigo-500 -z-10" />

                    {/* Image on top */}
                    <Image
                        src="/pictures/logo.png"
                        width={300}
                        height={300}
                        className="w-full h-auto"
                        alt="logo pic"
                    />
                </div>

                <div className="flex flex-col gap-5 text-right max-sm:text-center">
                    <h2 className="text-3xl font-bold mb-4 text-zinc-100">درباره ما</h2>
                    <div dir="rtl" className="text-lg leading-relaxed text-right space-y-6 text-zinc-300">
                        <p>رستوران چی چی فود با تلفیقی از طعم‌های اصیل ایرانی و فضای مدرن، تجربه‌ای متفاوت از غذاخوری را برای مهمانان خود فراهم می‌کند.</p>
                        <p>چی چی فود با ظرفیت ۱۰۰ نفر، امکان رزرو تلفنی، پارکینگ اختصاصی و اجرای موسیقی زنده را فراهم کرده.</p>
                        <p>در چی چی فود، کیفیت غذا، احترام به مشتری و فضای گرم و صمیمی در اولویت قرار دارد.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
