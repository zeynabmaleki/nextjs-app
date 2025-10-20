'use client'

import React, { useState, useEffect } from 'react'
import { getFetch } from '@/utils/fetch'
import CategoriesList from '@/components/Menu/CategoriesList';
import ProductsLists from '@/components/Menu/ProductsLists';
import Search from '@/components/Menu/Search'
import SortingBy from '@/components/Menu/SortingBy'


export default async function MenuPage() {

    const categories = await getFetch('/categories')

    // const [categories, setCategories] = useState([])
    // const [products, setProducts] = useState([])
    // const [filteredProducts, setFilteredProducts] = useState([])
    // const [searchTerm, setSearchTerm] = useState('')
    // const [selectedCategory, setSelectedCategory] = useState('all')
    // const [sortOrder, setSortOrder] = useState('')

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const categoriesData = await getFetch('/categories')
    //             setCategories([{ id: 'all', name: 'همه' }, ...categoriesData])
    //             const productsData = await getFetch('/products')
    //             setProducts(productsData)
    //             setFilteredProducts(productsData)
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     fetchData()
    // }, [])

    // useEffect(() => {
    //     let filtered = products

    //     if (selectedCategory !== 'all') {
    //         filtered = filtered.filter(product => product.category_id === selectedCategory)
    //     }

    //     if (searchTerm) {
    //         filtered = filtered.filter(product =>
    //             product.name.toLowerCase().includes(searchTerm.toLowerCase())
    //         )
    //     }

    //     if (sortOrder === 'expensive') {
    //         filtered = filtered.sort((a, b) => b.price - a.price)
    //     } else if (sortOrder === 'cheap') {
    //         filtered = filtered.sort((a, b) => a.price - b.price)
    //     }

    //     setFilteredProducts(filtered)
    // }, [selectedCategory, searchTerm, sortOrder, products])

    return (
        <section className="min-h-screen bg-gradient-to-r from-stone-800 via-yellow-900 to-stone-800 py-20 px-4 text-stone-400">
            <div className="max-w-6xl mx-auto">
                <div className="flex md:flex-row flex-col-reverse gap-3 justify-around items-start mt-10 max-md:mx-20">

                    {/* Products Grid */}
                    <div className="w-auto h-auto">
                        <ProductsLists />
                    </div>

                    {/* Filters Sidebar */}
                    <div className=" w-auto flex flex-col  justify-around  bg-stone-900 p-6 rounded-lg ">
                        <Search />
                        <hr className="border-stone-600 mb-6" />
                        <CategoriesList categories={categories} />
                        <hr className="border-stone-600 mb-6" />
                        <SortingBy />
                    </div>

                </div>
            </div>
        </section>
    )
}
