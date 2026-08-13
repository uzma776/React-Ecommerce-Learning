/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Categories } from "../data";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search,setSearch] = useState("")
  const [category,setCategory] = useState("all")
  const [priceRange,setPriceRange] = useState(0)
  const [filteredProducts, setFilterProducts] = useState([])


  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");

        console.log(response.data.products);
        setProducts(response.data.products)
        setFilterProducts(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    getAllProducts();
  }, []);
  useEffect(()=>{
    let result = products
    if(category !== "all"){
        result = result.filter((product) => product.category === category);
    }
    if(search !==""){
      result = result.filter((product => product.title.toLowerCase().includes(search)))
    }
    if(priceRange !== 0 ){
      result = result.filter(product =>product.price <= priceRange)

    }
  
    setFilterProducts(result)
    console.log(result)
  },[products, category,search,priceRange])

  return (
    <>
      <div className="container text-center">
        <h1>Products</h1>
      </div>

      <div className="container">
        <div className="filter">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-2 col-12">
              <input type="search" name="" id="" placeholder="Search here..." value={search} onChange={(e)=> setSearch(e.target.value)} />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-2 col-12">
              <select name="" id="" style={{ width: "200px" }} onChange={(e)=> setCategory(e.target.value)}>
                {Categories.map((category) => (
                  <option value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-2 col-12">
              <label htmlFor="">${priceRange}</label>
              <input type="range" min = "0" max = "1000" value={priceRange}  onChange={(e) => setPriceRange(e.target.value)}/>
            </div>
          </div>
        </div>
        <div className="row g-5">
          {filteredProducts.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <Link to={"/products/" + product.id} style={{color: 'black', textDecoration: 'none'}}>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="img-fluid"
                  style={{ height: "250px", objectFit: "contain" }}
                />
                <h2>{product.title}</h2>
                <p>${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
