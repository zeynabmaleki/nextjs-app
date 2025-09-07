import React from 'react'

export default function Contact() {
    return (
        <div className="flex flex-col lg:flex-row gap-10 p-6 bg-white rounded-xl shadow-md w-full max-w-5xl mx-auto">
            {/* Contact Form */}
            <form className="flex-1 flex flex-col gap-4 bg-gray-50 p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4 text-amber-700">تماس با ما</h2>
                <input
                    type="text"
                    placeholder="نام شما"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                />
                <input
                    type="email"
                    placeholder="ایمیل شما"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                />
                <textarea
                    placeholder="پیام شما"
                    rows={5}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                />
                <button
                    type="submit"
                    className="bg-amber-700 text-white rounded-md py-2 px-4 hover:bg-amber-600 transition-colors font-bold"
                >
                    ارسال پیام
                </button>
            </form>

            {/* Map Placeholder */}
            <div className="flex-1 min-h-[300px] bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">اینجا نقشه قرار می‌گیرد</span>
            </div>
        </div>
    )
}
