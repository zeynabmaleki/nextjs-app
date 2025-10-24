'use client'

import React from 'react'
import { useFormStatus } from 'react-dom'
import { AiOutlineLoading3Quarters } from "react-icons/ai"


export default function SubmitButton({ title, className = '', variant = 'primary', ...props }) {
    const { pending } = useFormStatus()

    const variants = {
        primary: `bg-amber-500 text-zinc-800 rounded-xl py-2 px-8 transition-colors font-bold`,
        secondary: `bg-transparent border border-amber-500 text-amber-500 rounded-xl py-2 px-6 transition-colors font-bold hover:bg-amber-500/10`
    }

    const base = variants[variant] || variants.primary
    const pendingClass = pending ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'

    return (
        <button
            type={props.type || 'submit'}
            className={`${base} ${pendingClass} ${className}`}
            disabled={props.disabled ?? pending}
            {...props}
        >
            <span className="flex items-center justify-center gap-2">
                {title}
                {pending && <span className="animate-spin text-2xl"><AiOutlineLoading3Quarters /></span>}
            </span>
        </button>
    )
}
