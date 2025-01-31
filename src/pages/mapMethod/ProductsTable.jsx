import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;


  const navigate = useNavigate();

  const fetchProductes = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      console.log("Products", res.data);
      setProducts(res.data);
      // setFilteredProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductes();
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      const result = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));
      console.log("Filtered Products", result);
      setFilteredProducts(result);
    }, 500)

    return () => clearTimeout(debounce);
  }, [search, products])

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSearch("");
    setFilteredProducts([]);
  }

  const handleView = (id) => {
    navigate(`/productDetail/${id}`);
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const paginationProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNext = () => {
    if(currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
    }
  }

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading.......</div>
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h3>Products Table</h3>
      <input type="text"
        placeholder='Search by product title'
        value={search}
        onChange={handleSearch}
        style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '10px' }}
      />
      {search && (
        filteredProducts.map((product) => (
          <div key={product.id} onClick={() => handleProductClick(product)}>
            {product.title}
          </div>
        ))
      )}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2' }}>Id</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2' }}>Product Title</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2' }}>Category</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2' }}>Image</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2' }}>Price</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2' }}>Rating</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedProduct ? (
            <tr key={selectedProduct.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{selectedProduct.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{selectedProduct.title}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{selectedProduct.category}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <img src={selectedProduct.image} alt={selectedProduct.title} style={{ maxWidth: '100px' }} />
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{selectedProduct.price}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {Array(Math.floor(selectedProduct.rating.rate))
                  .fill()
                  .map((_, i) => (
                    < FaStar key={`full-${i}`} style={{ color: 'gold' }} />
                  ))
                }
                {selectedProduct.rating.rate % 1 != 0 && (
                  < FaStar style={{ color: 'gold', opacity: 0.5 }} />
                )}
                {Array(5 - Math.floor(selectedProduct.rating.rate))
                  .fill()
                  .map((_, i) => (
                    < FaStar key={`empty-${i}`} style={{ color: 'gray', opacity: 0.5 }} />
                  ))
                }
                
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}><button onClick={()=> handleView(selectedProduct.id)} style={{ padding: '8px 16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>View Details</button></td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id}>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{product.id}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{product.title}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{product.category}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                  <img src={product.image} alt={product.title} style={{ width: '50px', height: '50px' }} />
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{product.price}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                  {Array(Math.floor(product.rating.rate))
                    .fill()
                    .map((_, i) => (
                      <FaStar key={`full-${i}`} style={{ color: 'yellow' }} />
                    ))}
                  {product.rating.rate % 1 !== 0 && (
                    <FaStar key="half" style={{ color: 'yellow', opacity: 0.5 }} />
                  )}
                  {Array(Math.floor(5 - product.rating.rate))
                    .fill()
                    .map((_, i) => (
                      <FaStar key={`empty-${i}`} style={{ color: 'gray', opacity: 0.5 }} />
                    ))
                  }
                </td>
                <td style={{ border: '1px solid #ddd', padding: '4px' }}><button onClick={()=> handleView(product.id)} style={{ padding: '8px 6px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>View Details</button></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsTable
