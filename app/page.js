import Image from 'next/image'
import Link from 'next/link'
import { FaPlus } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="font-sans">

      {/* Parallax Section 1 */}
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/pictures/foodpic4.jpg')" }}
        >
          <div className="absolute inset-0  bg-opacity-50"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center ">

          <div className='absolute pr-12 pl-70 pt-55 pb-50 top-0 left-150 text-right bg-gradient-to-l from-gray-950 to-100% text-gray-100'>
            <h1 className="text-3xl font-bold pb-10">به وبسایت ما خوش آمدید</h1>
            <p className="text-lg leading-relaxed mb-4 text-right">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، <br />
              چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
            </p>
          </div>

        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-r from-stone-800 via-yellow-900 to-stone-800  py-20 px-4 text-stone-400">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">منو</h2>

          <div className="flex flex-row justify-center items-center  gap-5">

            <div className="flex flex-col items-center shadow-xl hover:shadow-lg hover:scale-105 transition-transform p-3  rounded-2xl bg-zinc-800">
              <Image
                className='rounded-2xl mb-5'
                src="/foods/food1.jpg"
                alt="food"
                width={150}
                height={150} />
              <p className=''>food 1</p>
            </div>

            <div className="flex flex-col items-center p-3  rounded-2xl bg-zinc-800 hover:shadow-lg hover:scale-105 transition-transform">
              <Image
                className='rounded-2xl mb-5'
                src="/foods/food1.jpg"
                alt="food"
                width={150}
                height={150} />
              <p className=''>food 2</p>
            </div>

            <div className="flex flex-col items-center p-3  rounded-2xl bg-zinc-800 hover:shadow-lg hover:scale-105 transition-transform">
              <Image
                className='rounded-2xl mb-5'
                src="/foods/food1.jpg"
                alt="food"
                width={150}
                height={150} />
              <p className=''>food 3</p>
            </div>

            <div className="flex flex-col items-center p-3  rounded-2xl bg-zinc-800 hover:shadow-lg hover:scale-105 transition-transform">
              <Image
                className='rounded-2xl mb-5'
                src="/foods/food1.jpg"
                alt="food"
                width={150}
                height={150} />
              <p className=''>food 4</p>
            </div>

            <div >
              <Link href='/' className='flex justify-around items-center border rounded-4xl w-10 h-10 text-3xl'>
                <FaPlus />
              </Link>
            </div>


          </div>

        </div>
      </div>

      {/* Parallax Section 2 */}
      <div className="relative h-screen overflow-hidden ">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/pictures/foodpic9.jpg')" }}
        >
          <div className="absolute inset-0  bg-opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h2 className="text-5xl font-bold text-white">Our Delicious Menu</h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-r from-stone-800 via-yellow-900 to-stone-800  py-20 px-4 text-stone-400">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
          <p className="text-lg leading-relaxed mb-4 text-right">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، <br />
            شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی،
            و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها،
            و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
      </div>

      {/* Parallax Section 3 */}
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/pictures/foodpic6.jpg')" }}
        >
          <div className="absolute inset-0  bg-opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h2 className="text-5xl font-bold text-white">Our Delicious Menu</h2>
        </div>
      </div>


      {/* More Content */}
      <div className="bg-gradient-to-r from-stone-800 via-yellow-900 to-stone-800  py-20 px-4 text-stone-400">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
        </div>
      </div>



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

    </div>
  );
}
