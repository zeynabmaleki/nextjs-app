'use client'

import React, { useState } from 'react'
import EmailLogin from '@/components/Auth/EmailLogin'
import CellphoneLogin from '@/components/Auth/CellphoneLogin'
import CheckOtpForm from '@/components/Auth/CheckOtpForm'


export default function LoginPage() {
    const [step, setStep] = useState(1)

    return (
        <div className="min-h-screen flex flex-col gap-10 items-center justify-center bg-zinc-100 px-6 pt-25 pb-15">

            {/* Log in using phone number */}
            {step == 1 && <CellphoneLogin setStep={setStep} />}

            {/* Log in using email */}
            {/* {step == 1 && <EmailLogin />} */}

            {/* getting the OTP code */}
            {step == 2 && <CheckOtpForm />}

        </div>
    )
}
