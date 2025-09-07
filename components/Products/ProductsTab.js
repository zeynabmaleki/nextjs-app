'use client'

import React from 'react'
import { FaPlus } from "react-icons/fa6"
import Link from 'next/link'
import ProductCard from './ProductCard'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


export default function ProductsTab({ tabList, tabPanel }) {
    return (

        <div className='flex flex-col justify-center items-center'>
            <h2 className="text-3xl font-bold mb-8 text-center">منو</h2>

            <Tabs>
                <TabList>
                    <ul id='tabList' className='flex flex-row sm:gap-10 gap-5 justify-center items-center'>
                        {tabList.map((list, index) => (
                            <Tab key={index} className=' hover:text-amber-600 duration-500 hover:scale-105 focus:bg-stone-800 rounded-3xl py-2 px-2 focus:text-stone-300 outline-0 cursor-pointer '>
                                {list}
                            </Tab>
                        ))}
                    </ul>
                </TabList>


                <div id='tabPanel' className="mt-15">
                    <div>
                        {tabPanel.map((panel, index) => (
                            <TabPanel key={index}>
                                <div  className='flex flex-row justify-around items-center xl:gap-10 gap-5 max-lg:flex-col'>
                                    {panel.map((product) => (
                                        <div key={product.id}>
                                            <ProductCard product={product} />
                                        </div>
                                    ))}
                                </div>
                            </TabPanel>
                        ))}
                    </div>
                </div>
            </Tabs>

            <Link href='/' className='mt-10' > مشاهده بیشتر </Link>

        </div>
    )
}
