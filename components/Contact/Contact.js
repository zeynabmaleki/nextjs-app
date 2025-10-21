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
        <section id='contact' className="scroll-mt-35 flex flex-col lg:flex-row gap-10 rounded-xl p-6 my-15  w-full max-w-5xl mx-auto">

            {/* Map Placeholder */}
            <div className="map_container flex-1 min-h-[300px] border-2 border-stone-400 rounded-xl p-6 flex items-center justify-center ">
                <Map />
            </div>

            {/* Contact Form */}
            <form action={formAction} className="flex-1 flex flex-col gap-4 text-right rounded-xl p-0">
                <h2 className="text-2xl font-bold mb-2 text-zinc-800 pr-4">تماس با ما</h2>
                <input
                    name='name'
                    type="text"
                    placeholder="نام "
                    className=" border-2 border-stone-400 text-right rounded-md p-2 pr-3 focus:outline-none focus:ring-2 focus:ring-stone-500"
                />
                <input
                    name='email'
                    type="email"
                    placeholder="ایمیل "
                    className=" border-2 border-stone-400 text-right rounded-md p-2  pr-3 focus:outline-none focus:ring-2 focus:ring-stone-500 "
                />
                <input
                    name='subject'
                    type='text'
                    className=" border-2 border-stone-400 text-right rounded-md p-2  pr-3 focus:outline-none focus:ring-2 focus:ring-stone-500 "
                    placeholder=' موضوع پیام '
                />
                <textarea
                    name='text'
                    type="text"
                    placeholder="پیام "
                    rows={5}
                    className=" border-2 border-stone-400 text-right rounded-md p-2  pr-3 focus:outline-none focus:ring-2 focus:ring-stone-500"
                />
                <SubmitButton title=" ارسال پیام " />
            </form>

        </section>


    )
}
