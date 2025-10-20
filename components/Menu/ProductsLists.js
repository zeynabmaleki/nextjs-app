import React from 'react'
import ProductCard from '../Products/ProductCard'
import { getFetch } from '@/utils/fetch'


export default async function ProductsLists() {
    const data = await getFetch('/menu')

    return (
        <>
            <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-2 mx-5 '>
                {data.products.map(product => (
                    <div key={product.id} className=''>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </>
    )
}
