'use client'

import React from 'react'
import { useFormStatus } from 'react-dom'
import { AiOutlineLoading3Quarters } from "react-icons/ai"


export default function SubmitButton({ title }) {
    const {pending} = useFormStatus()

    return (

        <button
            type="submit"
            className={`
                bg-amber-700 text-zinc-800 rounded-md py-2 px-4 hover:bg-amber-600 transition-colors font-bold
                ${pending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-600'}`}
            disabled={pending}
        >
            <span className="flex items-center justify-center gap-2">
                {title}
                {pending && <span className="animate-spin text-2xl"><AiOutlineLoading3Quarters /></span>}
            </span>

        </button>

    )
}
