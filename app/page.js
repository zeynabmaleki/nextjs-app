import { getFetch } from '@/utils/fetch';
import Image from 'next/image'
import Link from 'next/link'
import ProductsTab from '@/components/Products/ProductsTab';
import { BsShop } from "react-icons/bs";
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection';
import AboutUs from '@/components/AboutUs';


export default async function Home() {

  // const productsTab = await getFetch('/products/products-tabs')
  // console.log(productsTab);
  const products = await getFetch('/products/products-tabs')

  return (
    < div className="font-sans" >


      {/* Hero Section */}
      <HeroSection />


      {/* menu Section */}
      < div className="bg-zinc-100 scroll-mb-20  pb-25 pt-25 px-4 text-zinc-800" >
        <div className="max-w-4xl mx-auto">
          <ProductsTab
            tabList={products.tabList}
            tabPanel={products.tabPanel}
          />
        </div>
      </div >


      {/* About us Section */}
      <AboutUs />


      {/* contact us section */}
      < div className="bg-zinc-100  py-20 px-10 max-md:py-10 text-stone-700">
        <Contact />
      </div >


      <Footer />


    </div >
  );
}
