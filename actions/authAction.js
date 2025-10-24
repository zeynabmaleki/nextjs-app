'use server'

import { postFetch } from "@/utils/fetch"
import { handleError } from "@/utils/helper"
import { cookies } from "next/headers"


export async function login(stateLogin, formData) {

    const cellphone = formData.get('cellphone')


    if (!cellphone || cellphone.toString().trim() === '') {
        return {
            status: "error",
            message: "شماره موبایل الزامی است"
        }
    }

    const pattern = /^(\+98|0)?9\d{9}$/
    if (!pattern.test(String(cellphone).trim())) {
        return {
            status: "error",
            message: "فرمت شماره موبایل معتبر نیست  "
        }
    }

    const data = await postFetch('/auth/login', { cellphone })

    if (data.status === 'success') {
        const cookieStore = await cookies()
        cookieStore.set({
            name: "login_token",
            value: data.data.login_token,
            httpOnly: true,
            path: '/',
            maxAge: 60 * 60 * 24 * 7 // 1 week
        })
        return {
            status: data.status,
            message: " کد تایید با موفقیت برای شما ارسال شد"
        }
    } else {
        return {
            status: data.status,
            message: handleError(data.message)
        }
    }

}



export async function checkOtp(stateOtp, formData) {

    const otp = formData.get('otp')

    if (!otp || otp.toString().trim() === '') {
        return {
            status: "error",
            message: "کد ورود الزامی است"
        }
    }

    const pattern = /^[0-9]{6}$/
    if (!pattern.test(String(otp).trim())) {
        return {
            status: "error",
            message: "کد ورود معتبر نیست  "
        }
    }

    const cookieStore = await cookies()
    const loginData = cookieStore.get("login_token")
    if (!loginData) {
        return {
            status: "error",
            message: ".توکن ورودی شما معتبر نیست. یک بار دیگ تلاش کنید"
        }
    }

    const data = await postFetch('/auth/check-otp', { otp, login_token: loginData.value })

    if (data.status === 'success') {
        cookieStore.delete('login_token')
        cookieStore.set({
            name: "token",
            value: data.data.token,
            httpOnly: true,
            path: '/',
            maxAge: 60 * 60 * 24 * 7 // 1 week
        })
        return {
            status: data.status,
            message: ".شما با موفقیت وارد شدید",
            user: data.data.user
        }
    } else {
        return {
            status: data.status,
            message: handleError(data.message)
        }
    }

}


export async function resendOtp(stateResendOtp, formData) {

    const cookieStore = await cookies()
    const loginData = cookieStore.get("login_token")
    if (!loginData) {
        return {
            status: "error",
            message: ".توکن ورودی شما معتبر نیست. یک بار دیگ تلاش کنید"
        }
    }

    const data = await postFetch('/auth/resend-otp', {login_token: loginData.value })

    if (data.status === 'success') {
        cookieStore.set({
            name: "login_token",
            value: data.data.login_token,
            httpOnly: true,
            path: '/',
            maxAge: 60 * 60 * 24 * 7 // 1 week
        })
        return {
            status: data.status,
            message: " .کد ورود دوباره برای شما ارسال شد"
        }
    } else {
        return {
            status: data.status,
            message: handleError(data.message)
        }
    }
}



export async function me() {

    const cookieStore = await cookies()
    const token = cookieStore.get('token')

    if (!token) {
        return {
            error: "Not Authorized"
        }
    }

    const data = await postFetch('/auth/me', {}, { 'Authorization': `Bearer ${token.value}` })

    if (data.status === 'success') {
        return {
            user: data.data
        }
    } else {
        return {
            error: "User forbidden"
        }
    }

}

