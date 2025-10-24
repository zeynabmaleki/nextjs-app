'use client'

import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { BsShop } from "react-icons/bs";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import MenuOverlay from './MenuOverlay';
import Image from 'next/image'
import AuthContext from '@/context/AuthContext';


export default function Header() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState()
    const { user } = useContext(AuthContext)

    return (
        <section className='relative  z-11'>
            <div className=" flex flex-row justify-between items-center xl:px-20 lg:px-10 md:px-5 px-5 py-3 backdrop-blur-md bg-zinc-900/70 fixed top-0 right-0 left-0 text-white">

                <div className='flex flex-row lg:gap-7 gap-4 justify-between'>
                    {user ? (
                        <Link href='/auth/login' className='flex flex-row gap-2 p-1 sm:border sm:border-amber-400 rounded-xl'>
                            <CgProfile className='sm:text-2xl text-3xl' />
                            <span className='max-sm:hidden px-2'> پروفایل </span>
                        </Link>
                    ) : (
                        <Link href='/auth/login' className='flex flex-row gap-2 p-1 sm:border sm:border-amber-400 rounded-xl'>
                            <CgProfile className='sm:text-2xl text-3xl' />
                            <span className='max-sm:hidden px-2'>ورود | ثبت نام</span>
                        </Link>
                    )}

                    <Link href='/' className='text-3xl pt-0.5 text-amber-400' >
                        <RiShoppingCart2Fill />
                    </Link>
                </div>

                <nav className=' flex flex-row justify-between xl:gap-15 lg:gap-10 gap-7 max-md:hidden'>
                    <Link href='#contact'>تماس با ما</Link>
                    <Link href='#about'>درباره ما</Link>
                    <Link href='#menu'>منو</Link>
                    <Link href='/'>صفحه اصلی</Link>
                </nav>

                <div className='flex flex-row justify-between items-center gap-5 align-middle'>
                    <div className='flex flex-row justify-between items-center text-amber-700'>
                        {/* <BsShop className=' text-3xl' />
                        <span className=' text-2xl max-sm:hidden'>
                            yummy
                        </span> */}
                        <Image
                            src="/pictures/logo.png"
                            width={70}
                            height={70}
                            alt="logo pic"
                        />
                    </div>
                    <div className='pt-1 text-2xl mobile-menu md:hidden'>
                        {!mobileMenuOpen ?
                            (
                                <button onClick={() => setMobileMenuOpen(true)}>
                                    <FaBars />
                                </button>
                            ) : (
                                <span></span>
                            )
                        }
                    </div>
                </div>

            </div>

            {mobileMenuOpen ? <MenuOverlay setMobileMenuOpen={setMobileMenuOpen} /> : null}
        </section>
    )
}
