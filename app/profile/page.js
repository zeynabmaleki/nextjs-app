import { getFetch } from '@/utils/fetch'
import { cookies } from 'next/headers'
import React from 'react'

export default async function page() {

    const cookieStore = await cookies()
    const token = cookieStore.get('token')
    const user = await getFetch('/profile/info', { 'Authorization': `Bearer ${token.value}` })


    return (
        <div dir='rtl' className='flex flex-col gap-10 px-5 pt-1 pb-5 justify-center items-start '>
            <h2 className='text-xl font-semibold'> اطلاعات کاربر </h2>

            <form className='flex flex-row gap-5 flex-wrap items-baseline'>
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
                    name='phoneNumber'
                    className="rounded-md p-3 bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-right"
                    defaultValue={user.cellphone}
                />
                <button>ویرایش</button>
            </form>

        </div>
    )
}
