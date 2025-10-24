'use client'

import React, { useActionState, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { resendOtp } from '@/actions/authAction'
import SubmitButton from '@/components/SubmitButton'


export default function ResendOtpButton() {

    const [stateResendOtp, formActionResendOtp] = useActionState(resendOtp, {})

    useEffect(() => {
        toast(stateResendOtp?.message, { type: `${stateResendOtp?.status}` })
        if (stateResendOtp?.status === 'success') {
            setMinutes(0)
            setSeconds(15)
        }
    }, [stateResendOtp])

    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(15)

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1)
            }
            if (seconds === 1) {
                if (minutes === 0) {
                    clearInterval(interval)
                } else {
                    setSeconds(59)
                    setMinutes(minutes - 1)
                }
            }
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [seconds])

    return (
        <section>
            {seconds > 0 || minutes > 0 ? (
                <div className='text-amber-500 py-1 px-6 text-xl'>
                    {minutes < 10 ? `0${minutes}` : minutes}:
                    {seconds < 10 ? `0${seconds}` : seconds}
                </div>
            ) : (
                <form action={formActionResendOtp}>
                    <SubmitButton title="ارسال دوباره" variant="secondary" />
                </form>
            )
            }
        </section >
    )
}
