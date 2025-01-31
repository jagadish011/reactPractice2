import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
    }, [id]);

    const containerStyle = {
        padding: "20px",
        maxWidth: "800px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6
    };

    const titleStyle = {
        fontSize: "2em",
        marginBottom: "20px",
        textAlign: "center",
        color: "#333"
    };

    const imageStyle = {
        display: "block",
        margin: "auto",
        maxWidth: "100%",
        height: "250px"
    };

    const productInfoStyle = {
        textAlign: "left",
        marginBottom: "10px"
    };

    const priceStyle = {
        color: "#E91E63",
        fontWeight: "bold"
    };

    return (
        <div style={containerStyle}>
            <h2 style={titleStyle}>{product.title}</h2>
            <img src={product.image} alt={product.title} style={imageStyle} />
            <p style={productInfoStyle}><strong>Category:</strong> {product.category}</p>
            <p style={{ ...productInfoStyle, ...priceStyle }}><strong>Price:</strong> ${product.price}</p>
            <p style={productInfoStyle}><strong>Description:</strong> {product.description}</p>
        </div>
    );
}

export default ProductDetails;
