import React from 'react'
import Image from 'next/image'
import { RiShoppingCart2Fill } from "react-icons/ri";
import { numberFormat } from '@/utils/helper';



export default function ProductCard({ product }) {
    return (
        <div className='flex flex-col h-90 w-70 justify-between items-center mx-auto mb-5 bg-zinc-800/70 rounded-2xl hover:scale-105 duration-500 transform hover:shadow-xl border-double shadow-black text-stone-300'>

            <Image
                src={product.primary_image}
                width="100"
                height="65"

                style={{
                    width: "100%",
                    height: "auto"
                }}
                alt='product-image'
                className='rounded-2xl rounded-bl-4xl rounded-br-none pb-3'
            />

            <h5>{product.name}</h5>

            <p className='text-center text-sm pt-2 text-stone-500 pr-1 pl-1'>
                {product.description}
            </p>

            <div className='flex flex-row justify-between items-center gap-12 pt-7 mb-3'>

                <button className='bg-amber-700 rounded-4xl p-2 text-stone-800 hover:bg-amber-600 hover:scale-105 duration-500 transform'>
                    <RiShoppingCart2Fill />
                </button>

                <div className='flex text-sm items-center justify-between'>
                    {product.is_sale ? (
                        <div className=''>
                            <span className='text-stone-500 pr-2 line-through'>
                                {numberFormat(product.price)}
                            </span>
                            <span>
                                {numberFormat(product.sale_price)}
                            </span>
                        </div>
                    ) : (
                        <span>{numberFormat(product.price)}</span>
                    )}
                    <span className='text-sm text-stone-500 pl-1'>T</span>
                </div>

            </div>
        </div>
    )
}
