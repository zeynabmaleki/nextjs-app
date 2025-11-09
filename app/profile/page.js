import EditForm from '@/components/Profile/info/EditForm'
import { getFetch } from '@/utils/fetch'
import { cookies } from 'next/headers'
import React from 'react'

export default async function page() {

    const cookieStore = await cookies()
    const token = cookieStore.get('token')
    const user = await getFetch('/profile/info', { 'Authorization': `Bearer ${token.value}` })


    return (
        <section>
            <EditForm user={user} />
        </section>
    )
}
