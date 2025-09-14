import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";


export default function Footer() {
    return (
        <footer className='flex flex-col items-center'>

            <div className='grid grid-cols-3 gap-15 justify-between items-center mb-10'>
                <div className='flex flex-col justify-around items-center gap-3'>
                    <h4 className='text-xl font-semibold text-zinc-200'> ساعت کاری </h4>
                    <div className='text-zinc-300 flex flex-col items-center gap-1'>
                        <span> هر روز </span>
                        <span> از 8 صبح تا 8 شب</span>
                    </div>
                </div>

                <div className='flex flex-col  items-center  gap-3'>
                    <h3 className='text-3xl font-semibold text-zinc-200'>yummy.org</h3>
                    <div className='text-zinc-300 flex flex-col items-center gap-4'>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            <br />
                            صنعت چاپ،
                            و با استفاده از طراحان گرافیک است
                        </p>
                        <div className='flex flex-row gap-2 text-3xl'>
                            <IoLogoInstagram className=' hover:scale-110 cursor-pointer duration-300' />
                            <TiSocialFacebook className=' hover:scale-110 cursor-pointer duration-300'  />
                            <TiSocialYoutube className=' hover:scale-110 cursor-pointer duration-300'  />
                            <TiSocialTwitter className=' hover:scale-110 cursor-pointer duration-300'  />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col  items-center  gap-3'>
                    <h4 className='text-xl font-semibold text-zinc-200'> تماس با ما </h4>
                    <div className='text-zinc-300 flex flex-col items-center gap-1 align-baseline'>
                        <span className='flex flex-row hover:scale-110 cursor-pointer duration-300'>
                            ادرس
                            <CiLocationOn className='text-xl' />
                        </span>
                        <span className='flex flex-row hover:scale-110 cursor-pointer duration-300'>
                            09100000000
                            <CiPhone className='text-xl' />
                        </span>
                        <span className='flex flex-row hover:scale-110 cursor-pointer duration-300'>
                            yummy@gmail.com
                            <MdOutlineMail className='text-xl' />
                        </span>
                    </div>
                </div>
            </div>

            <p className='text-amber-600'>Made by Zeynab Maleki rad</p>
        </footer>
    )
}
