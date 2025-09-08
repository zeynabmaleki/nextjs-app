import { getFetch } from '@/utils/fetch';
import Image from 'next/image'
import Link from 'next/link'
import ProductsTab from '@/components/Products/ProductsTab';
import { BsShop } from "react-icons/bs";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { SlSocialYoutube } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import Contact from '@/components/Contact/Contact';



export default async function Home() {

  // const productsTab = await getFetch('/products/products-tabs')
  // console.log(productsTab);
  const products = await getFetch('/products/products-tabs')

  return (
    < div className="font-sans" >

      {/* Parallax Section 1 */}
      < div className="relative h-screen overflow-hidden" >
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/pictures/foodpic4.jpg')" }}
        >
          <div className="absolute inset-0  bg-opacity-50"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <div
            className="
              absolute text-right
              right-0 bottom-0 top-0
              w-full sm:w-4/5 md:w-3/5 lg:w-1/2
              2xl:pl-60 xl:pl-40
              bg-gradient-to-l from-gray-950 to-100% text-gray-100
            "
          >
            <div className="pt-10 max-sm:pt-40 sm:pt-40 md:pt-40 lg:pt-40 xl:pt-40 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-20">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold pb-6 sm:pb-10">به وبسایت ما خوش آمدید</h1>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 text-right">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، <br />
                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
                و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
              </p>
            </div>
          </div>
        </div>
      </div >

      {/* menu Section */}
      < div className="bg-gradient-to-r from-stone-800 via-yellow-900 to-stone-800  py-20 px-4 text-stone-400" >
        <div className="max-w-4xl mx-auto">
          <ProductsTab
            tabList={products.tabList}
            tabPanel={products.tabPanel}
          />
        </div>
      </div >

      {/* Parallax Section 2 */}
      < div className="relative h-screen overflow-hidden " >
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/pictures/foodpic9.jpg')" }}
        >
          <div className="absolute inset-0  bg-opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h2 className="text-5xl font-bold text-white"> درباره ما </h2>
        </div>
      </div >

      {/* About us Section */}
      < div className="bg-gradient-to-r from-stone-800 via-yellow-900 to-stone-800  py-15 px-10 max-md:px-15 max-md:py-10 text-stone-400" >
        <div className="max-w-4xl mx-auto flex md:flex-row-reverse flex-col lg:gap-20 max-md:gap-7">

          <div className='flex flex-col gap-0 justify-center items-center text-amber-700'>
            <BsShop className=' text-9xl max-sm:text-7xl max-lg:text-8xl' />
            <span className=' text-6xl pl-17 max-sm:text-4xl max-sm:pl-11 max-lg:text-'>
              yummy
            </span>
          </div>

          {/* <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2> */}
          <p className="text-lg leading-relaxed mb-4 text-right py-10 max-sm:text-center">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، <br />
            شناخت فراوان جامعه و متخصصان را می طلبد.
          </p>
        </div>
      </div >

      {/* Parallax Section 3 */}
      < div className="relative h-screen overflow-hidden" >
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/pictures/foodpic6.jpg')" }}
        >
          <div className="absolute inset-0  bg-opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h2 className="text-5xl font-bold text-white"> تماس با ما </h2>
        </div>
      </div >


      {/* contact us section */}
      < div className="bg-gradient-to-r from-stone-800 via-yellow-900 to-stone-800 py-20 px-10 max-md:py-10 text-stone-400">
        <Contact/>
        {/* <div className="max-w-4xl mx-auto flex flex-row gap-20 max-sm:gap-10 max-md:flex-col">

          <div className='text-5xl cursor-pointer flex flex-row gap-7 justify-center items-center text-amber-700 '>
            <div className='flex flex-col gap-7 '>
              <TiSocialInstagram className='hover:scale-105 duration-300 hover:text-amber-600'/>
              <TiSocialPinterestCircular className='hover:scale-105 duration-300 hover:text-amber-600' />
            </div>
            <div className='flex flex-col gap-7'>
              <SlSocialYoutube className='hover:scale-105 duration-300 hover:text-amber-600' />
              <TiSocialTwitter className='hover:scale-105 duration-300 hover:text-amber-600' />
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-4 flex text-right justify-center items-center max-md:text-center">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div> */}
        
      </div >


      <footer>
        {/* Parallax Section 3 */}
        <div className="relative h-screen overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('/pictures/foodpic5.jpg')" }}
          >
            {/* <div className="absolute inset-0  bg-opacity-50"></div> */}
          </div>

          <div className="relative z-10 h-full flex flex-col items-center justify-center ">

            {/* <div className="absolute pl-150 top-0 bottom-0 left-0 bg-gradient-to-r from-stone-900 to-50%">
            </div>

            <div className="absolute pr-150 top-0 bottom-0 right-0 bg-gradient-to-l from-stone-900 to-50%">
            </div> */}

            <div className="absolute pb-15 pt-150 bottom-0 right-0 left-0 flex justify-center bg-gradient-to-t from-stone-900 to-50% text-gray-100">
              <p className="text-lg leading-relaxed">
                made by zeynab maleki rad
              </p>
            </div>

          </div>
        </div>

      </footer>

    </div >
  );
}
