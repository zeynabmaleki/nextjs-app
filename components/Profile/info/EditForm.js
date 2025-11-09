'use client'

import SubmitButton from '@/components/SubmitButton'
import React, { useActionState, useEffect } from 'react'
import { editInfo } from '@/actions/profileAction'
import { toast } from 'react-toastify'


export default function EditForm({ user }) {

    const [state, formAction] = useActionState(editInfo, {})

    useEffect(() => {
        toast(state?.message, { type: `${state?.status}` })
    }, [state])

    return (
        <section dir='rtl' className='flex flex-col gap-10 px-5 pt-1 pb-5 justify-center items-start '>
            <h2 className='text-xl font-semibold'> اطلاعات کاربر </h2>

            <form action={formAction} className='flex flex-row gap-5 flex-wrap items-baseline'>
                <label className="text-sm text-right">نام و نام خانوادگی:</label>
                <input
                    type="text"
                    name='name'
                    className="rounded-md p-3 bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-right"
                    defaultValue={user.name}
                />

                <label className="text-sm text-right">ایمیل:</label>
                <input
                    type="email"
                    name='email'
                    className="rounded-md p-3 bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-right"
                    defaultValue={user.email}
                />

                <label className="text-sm text-right">شماره تلفن:</label>
                <input
                    type="text"
                    disabled
                    className="rounded-md p-3 bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-right"
                    defaultValue={user.cellphone}
                />

                <SubmitButton title="ویرایش"/>
            </form>

        </section>
    )
}
