import React from 'react'
import Link from 'next/link'
import { BsShop } from "react-icons/bs";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

export default function Header() {
    return (
        <div className='relative  z-11'>
            <div className=" flex flex-row justify-between items-center xl:px-20 lg:px-10 md:px-5 px-5 py-3 bg-gradient-to-b from-stone-950 to-100% fixed top-0 right-0 left-0 text-white">

                <div className='flex flex-row lg:gap-7 gap-4 justify-between'>
                    <Link href='/' className='flex flex-row gap-2 p-1 sm:border sm:border-amber-700 rounded-xl'>
                        <CgProfile className='sm:text-2xl text-3xl' />
                        <span className='max-sm:hidden'>ورود | ثبت نام</span>
                    </Link>
                    <Link href='/' className='text-3xl pt-0.5 text-amber-700' >
                        <RiShoppingCart2Fill />
                    </Link>
                </div>

                <nav  className=' flex flex-row justify-between xl:gap-15 lg:gap-10 gap-7 max-md:hidden'>
                        <Link href='/'>تماس با ما</Link>
                        <Link href='/'>درباره ما</Link>
                        <Link href='/'>منو</Link>
                        <Link href='/'>صفحه اصلی</Link>
                </nav>

                <div className='flex flex-row justify-between items-center gap-5'>
                    <div className='flex flex-row justify-between items-center text-amber-700'>
                        <BsShop className=' text-3xl' />
                        <span className=' text-2xl max-sm:hidden'>
                            yummy
                        </span>
                    </div>
                    <div className='pt-1 text-2xl md:hidden'>
                        <FaBars />
                    </div>
                </div>

            </div>
        </div>
    )
}
