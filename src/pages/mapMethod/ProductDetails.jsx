import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    const fetchProductDetails = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
            console.log("Product details", res.data);
            setProduct(res.data);
        } catch (error) {
            console.error("error in fetching details of product", error)
        }
    }

    useEffect(() => {
        fetchProductDetails();
    }, [id])
    return (
        <div style={{ padding: "20px" }}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} style={{ maxWidth: "200px" }} />
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
        </div>
    )
}

export default ProductDetails
