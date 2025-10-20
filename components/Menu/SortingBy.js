import React from 'react'

export default function SortingBy() {
    return (
        <section className='flex flex-col '>
            <h4 className="text-amber-700 text-lg font-bold mb-4 text-right">مرتب سازی بر اساس</h4>
            <ul className="space-y-2 text-right">
                {/* <li
                                className={`cursor-pointer hover:text-amber-600 ${sortOrder === 'expensive' ? 'text-amber-600 font-bold' : ''}`}
                                onClick={() => setSortOrder('expensive')}
                            >
                                گرانترین
                            </li>
                            <li
                                className={`cursor-pointer hover:text-amber-600 ${sortOrder === 'cheap' ? 'text-amber-600 font-bold' : ''}`}
                                onClick={() => setSortOrder('cheap')}
                            >
                                ارزانترین
                            </li> */}
            </ul>
        </section>
    )
}
