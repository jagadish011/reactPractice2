import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const productsPerPage = 5;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
      setFilteredProducts(res.data);

      // Extract unique categories
      const uniqueCategories = ["All", ...new Set(res.data.map((p) => p.category))];
      setCategories(uniqueCategories);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      let result = products;

      if (selectedCategory !== "All") {
        result = result.filter((product) => product.category === selectedCategory);
      }

      result = result.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));

      setFilteredProducts(result);
    }, 500);

    return () => clearTimeout(debounce);
  }, [search, products, selectedCategory]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSearch("");
    setFilteredProducts([]);
  };

  const handleView = (id) => {
    navigate(`/productDetail/${id}`);
  };

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginationTable = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  if (loading) {
    return <div style={{ textAlign: "center", marginTop: "50px" }}>Loading.......</div>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h3>Products Table</h3>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by product title"
        value={search}
        onChange={handleSearch}
        style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "4px", marginBottom: "10px", marginRight: "10px" }}
      />

      {/* Category Dropdown */}
      <select value={selectedCategory} onChange={handleCategoryChange} style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "4px", marginBottom: "10px" }}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px", background: "#f2f2f2" }}>Id</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", background: "#f2f2f2" }}>Product Title</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", background: "#f2f2f2" }}>Category</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", background: "#f2f2f2" }}>Image</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", background: "#f2f2f2" }}>Price</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", background: "#f2f2f2" }}>Rating</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", background: "#f2f2f2" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {paginationTable.map((product) => (
            <tr key={product.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>{product.id}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>{product.title}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>{product.category}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>
                <img src={product.image} alt={product.title} style={{ width: "50px", height: "50px" }} />
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>${product.price}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>
                {Array(Math.floor(product.rating.rate))
                  .fill()
                  .map((_, i) => (
                    <FaStar key={`full-${i}`} style={{ color: "yellow" }} />
                  ))}
                {product.rating.rate % 1 !== 0 && <FaStar style={{ color: "yellow", opacity: 0.5 }} />}
                {Array(5 - Math.ceil(product.rating.rate))
                  .fill()
                  .map((_, i) => (
                    <FaStar key={`empty-${i}`} style={{ color: "gray", opacity: 0.5 }} />
                  ))}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "4px" }}>
                <button onClick={() => handleView(product.id)} style={{ padding: "8px 6px", background: "#007bff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductsTable;
