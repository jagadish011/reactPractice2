import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';

const ProductsDetails1 = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const debounce = setTimeout(() => {
            const result = products.filter((product) => product.category.includes(search.toLocaleLowerCase()));
            console.log("search result" , result)
            setSearchResults(result)
        },500)

        return () => clearTimeout(debounce);
    },[search, products])

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const productsPerPage = 5;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const paginationProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(products.length / productsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    const hadlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const fetchProducts = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products');
            console.log("products", res.data);
            setProducts(res.data);
        } catch (error) {
            console.log("error in fetching products", error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className='container mx-auto mt-10'>
            <div>
                <input type="text" value={search} onChange={handleSearch} placeholder='enter category to search' className='border p-2 my-3 rounded' />
                {search && searchResults.map((product) => (
                    <div key={product.id} className='bg-gray-200 p-2 rounded'>
                        <p>{product.category}</p>
                    </div>
                ))}
            </div>
            <table className='min-w-full bg-white border border-gray-300'>
                <thead>
                    <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                        <th className='py-3 px-6 text-left'>ID</th>
                        <th className='py-3 px-6 text-left'>Title</th>
                        <th className='py-3 px-6 text-left'>Category</th>
                        <th className='py-3 px-6 text-left'>Price</th>
                        <th className='py-3 px-6 text-left'>Rating</th>
                    </tr>
                </thead>
                <tbody className='text-gray-600 text-sm font-light'>
                    {searchResults.map((product) => (
                        <tr key={product.id} className='border-b border-gray-200 hover:bg-gray-100'>
                            <td className='py-3 px-6 text-left whitespace-nowrap'>{product.id}</td>
                            <td className='py-3 px-6 text-left'>{product.title}</td>
                            <td className='py-3 px-6 text-left'>{product.category}</td>
                            <td className='py-3 px-6 text-left'>{product.price}</td>
                            <td className='py-3 px-6 text-left'>
                                {
                                    [...Array(5)].map((_, i) => (
                                        <FaStar key={i}
                                            style={
                                                { color: i < Math.floor(product.rating.rate) ? 'gold' : i < Math.ceil(product.rating.rate) ? 'gold' : 'gray' }
                                            } />
                                    ))
                                }
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='flex justify-between mt-5'>
                <button className='bg-blue-500 text-white rounded p-2 ' onClick={hadlePrev}>Prev</button>
                <button className='bg-red-500 text-white rounded p-2 ' onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default ProductsDetails1
