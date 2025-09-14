'use client'

import React, { useActionState, useEffect } from 'react'
import { create } from '@/actions/contactAction'
import SubmitButton from '../SubmitButton'
import { toast } from 'react-toastify'
import dynamic from "next/dynamic";



export default function Contact() {
    const [state, formAction] = useActionState(create, {})

    useEffect(() => {
        toast(state?.message, { type: `${state?.status}` })
    }, [state])

    const Map = dynamic(
        () => import('./Map'),
        { ssr: false }
    );

    return (
        <section id='contact' className="scroll-mt-25 flex flex-col lg:flex-row gap-10   bg-white/5 backdrop-blur-md  shadow-lg rounded-xl p-6  w-full max-w-5xl mx-auto">

            {/* Map Placeholder */}
            <div className="map_container flex-1 min-h-[300px] bg-white/5 backdrop-blur-md shadow-lg rounded-xl p-6  flex items-center justify-center">
                <Map />
            </div>

            {/* Contact Form */}
            <form action={formAction} className="flex-1 flex flex-col gap-4 text-right bg-white/5 backdrop-blur-md  shadow-lg rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-2 text-zinc-800 pr-4">تماس با ما</h2>
                <input
                    name='name'
                    type="text"
                    placeholder="نام "
                    className="bg-white/5 text-right rounded-md p-2 pr-3 focus:outline-none focus:ring-2 focus:ring-stone-500"
                />
                <input
                    name='email'
                    type="email"
                    placeholder="ایمیل "
                    className="bg-white/5 text-right rounded-md p-2  pr-3 focus:outline-none focus:ring-2 focus:ring-stone-500 "
                />
                <input
                    name='subject'
                    type='text'
                    className="bg-white/5 text-right rounded-md p-2  pr-3 focus:outline-none focus:ring-2 focus:ring-stone-500 "
                    placeholder=' موضوع پیام '
                />
                <textarea
                    name='text'
                    type="text"
                    placeholder="پیام "
                    rows={5}
                    className="bg-white/5 text-right rounded-md p-2  pr-3 focus:outline-none focus:ring-2 focus:ring-stone-500"
                />
                <SubmitButton title=" ارسال پیام " />
            </form>

        </section>
    )
}
