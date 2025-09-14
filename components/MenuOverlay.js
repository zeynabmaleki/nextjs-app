import Link from 'next/link'
import { FaXmark } from "react-icons/fa6";

export default function MenuOverlay({ setMobileMenuOpen }) {
    return (
        <div className='fixed top-0 left-0 w-full h-full bg-zinc-800/50 z-20 flex justify-center items-center md:hidden'>
            <nav className='bg-zinc-800 text-zinc-100 py-5 px-8 rounded-lg flex flex-col gap-6 items-center'>
                <button
                    onClick={() => setMobileMenuOpen(false)}
                    className='self-end text-2xl'
                >
                    <FaXmark />
                </button>
                <div className='flex flex-col px-10 pb-6 text-center gap-4'>
                    <Link href='/' onClick={() => setMobileMenuOpen(false)}>صفحه اصلی</Link>
                    <Link href='#menu' onClick={() => setMobileMenuOpen(false)}>منو</Link>
                    <Link href='#about' onClick={() => setMobileMenuOpen(false)}>درباره ما</Link>
                    <Link href='#contact' onClick={() => setMobileMenuOpen(false)}>تماس با ما</Link>
                </div>
            </nav>
        </div>
    )
}
