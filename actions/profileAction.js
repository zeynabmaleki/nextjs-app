'use server'

import { postFetch } from "@/utils/fetch"
import { handleError } from "@/utils/helper"
import { cookies } from "next/headers"



export async function editInfo(state, formData) {

    const name = formData.get('name')
    const email = formData.get('email')

    if (!name || name.toString().trim() === '') {
        return {
            status: "error",
            message: ".نام و نام حانوادگی الزامی است"
        }
    }

    if (!email || email.toString().trim() === '') {
        return {
            status: "error",
            message: ".ایمیل الزامی است"
        }
    }


    const cookieStore = await cookies()
    const token = cookieStore.get("token")

    const data = await postFetch('/profile/info/edit', { name, email }, { 'Authorization': `Bearer ${token.value}` })

    if (data.status === 'success') {
        return {
            status: data.status,
            message: ".ویرایش اطلاعات با موفقیت انجام شد"
        }
    } else {
        return {
            status: data.status,
            message: handleError(data.message)
        }
    }
}



