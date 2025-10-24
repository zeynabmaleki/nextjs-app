'use client'

import React, { useActionState, useContext, useEffect } from 'react'
import { toast } from 'react-toastify'
import { checkOtp } from '@/actions/authAction'
import SubmitButton from '@/components/SubmitButton'
import AuthContext from '@/context/AuthContext'
import ResendOtpButton from './ResendOtpButton'
import { useRouter } from 'next/navigation'

export default function CheckOtpForm() {

    const [stateOtp, formActionOtp] = useActionState(checkOtp, {})
    const { loginContext } = useContext(AuthContext)
    const router = useRouter()

    useEffect(() => {
        toast(stateOtp?.message, { type: `${stateOtp?.status}` })
        if (stateOtp?.status === 'success') {
            loginContext(stateOtp.user)
            router.push('/')
        }
    }, [stateOtp])


    return (
        <section className='w-full max-w-md bg-white/5 backdrop-blur-md border border-white/90 rounded-2xl shadow-2xl p-8'>
            <form action={formActionOtp} className='flex flex-col gap-4'>
                <label className="text-sm text-right"> کد ورود </label>
                <input
                    name="otp"
                    type="text"
                    className="rounded-md p-3 bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-right"
                    placeholder="کد ارسال شده به شماره تماس"
                />
                <div className="mt-4 flex justify-center">
                    <SubmitButton title="تایید " />
                </div>
            </form>
            <div className="mt-4 flex justify-center">
                <ResendOtpButton />
            </div>
        </section>
    )
}
