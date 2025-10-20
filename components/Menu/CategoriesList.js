import React from 'react'


export default function CategoriesList({ categories }) {
    return (
        <section className='flex flex-col'>
            <h4 className="text-amber-700 text-lg font-bold mb-4 text-right">دسته بندی</h4>


            <ul className="space-y-2 mb-6 rtl flex flex-col ">
                {categories.map(cat => (
                    <li
                        key={cat.id}
                        className='text-right cursor-pointer hover:text-amber-600 max-xl:px-2'
                    // className={` ${selectedCategory === cat.id ? 'text-amber-600 font-bold' : ''}`}
                    // onClick={() => setSelectedCategory(cat.id)}
                    >
                        {cat.name}
                    </li>
                ))}
            </ul>

        </section>
    )
}
