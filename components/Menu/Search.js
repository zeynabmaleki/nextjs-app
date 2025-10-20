'use client'

import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";


export default function Search() {
    const [searchTerm, setSearchTerm] = useState('')

    // function handleSearch(){
    //     console.log(searchTerm)
    // }


    return (
        <section>
            <div className="mb-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="جستجو"
                        className="w-full text-right bg-stone-800 text-stone-400 border border-stone-600 rounded-lg py-2 px-4 pr-10 focus:outline-none focus:border-amber-600"
                        // value={searchTerm}
                        // onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-400"
                        // onClick={() => handleSearch()}
                    >
                        <FaSearch />
                    </button>

                </div>
            </div>
        </section>
    )
}
