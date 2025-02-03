import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';

const ProductsDetails1 = () => {
    const [products, setProducts] = useState([]);

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
                    {products.map((product) => (
                        <tr key={product.id} className='border-b border-gray-200 hover:bg-gray-100'>
                            <td className='py-3 px-6 text-left whitespace-nowrap'>{product.id}</td>
                            <td className='py-3 px-6 text-left'>{product.title}</td>
                            <td className='py-3 px-6 text-left'>{product.category}</td>
                            <td className='py-3 px-6 text-left'>{product.price}</td>
                            <td className='py-3 px-6 text-left'>
                                {Array(Math.floor(product.rating.rate))
                                    .fill()
                                    .map((_, i) => (
                                        < FaStar key={`full-${i}`} style={{ color: 'gold' }} />
                                    ))
                                }
                                {product.rating.rate % 1 != 0 && (
                                    < FaStar style={{ color: 'gold', opacity: 0.5 }} />
                                )}
                                {Array(5 - Math.ceil(product.rating.rate))
                                    .fill()
                                    .map((_, i) => (
                                        < FaStar key={`empty-${i}`} style={{ color: 'gray', opacity: 0.5 }} />
                                    ))
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductsDetails1
