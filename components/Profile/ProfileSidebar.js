import React from 'react'

export default function ProfileSidebar() {

    const sidebarList = ["اطلاعات کاربر", "آدرس ها", "سفارشات", "تراکنش ها"]

    return (
        <section>
            <table dir="rtl" className="table-auto border-2 border-zinc-300 ">
                <tbody>
                    {sidebarList.map((list, index) => (
                        <tr key={index}>
                            <td className="border border-zinc-300 pr-4 pl-16 py-4 text-right">{list}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}
