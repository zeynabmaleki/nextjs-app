'use client'

import React, { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { login } from '@/actions/authAction'
import SubmitButton from '@/components/SubmitButton'


export default function CellphoneLogin({ setStep }) {

    const [stateLogin, formActionLogin] = useActionState(login, {})

    useEffect(() => {
        toast(stateLogin?.message, { type: `${stateLogin?.status}` })
        if (stateLogin?.status === 'success') {
            setStep(2)
        }
    }, [stateLogin])


    return (
        <section className='w-full max-w-md bg-white/5 backdrop-blur-md border border-white/90 rounded-2xl shadow-2xl p-8'>
            <h2 className="text-2xl font-bold text-amber-500 mb-10 text-center">ورود با شماره تماس </h2>

            <form action={formActionLogin} className='flex flex-col gap-4'>
                <label className="text-sm text-right"> شماره تماس </label>
                <input
                    name="cellphone"
                    type="text"
                    className="rounded-md p-3 bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-right"
                    placeholder="09100000000"
                />

                <div className="flex items-center justify-between mt-2">
                    <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>مرا به خاطر بسپار</span>
                    </label>
                    <a href="#" className="text-sm text-amber-500"></a>
                </div>

                <div className="mt-4 flex justify-center">
                    <SubmitButton title="ورود" />
                </div>
            </form>
            <p className="mt-6 text-center text-sm text-stone-400">حساب کاربری ندارید؟
                <a href="#" className="text-amber-500 px-1">ثبت نام</a>
            </p>
        </section>
    )
}
