/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");

        console.log(response.data.products);
        setProducts(response.data.products)
      } catch (error) {
        console.log(error);
      }
    };

    getAllProducts();
  }, []);
  console.log(products)

  return (
    <>
      <div className="container text-center">
        <h1>Products</h1>
      </div>

      <div className="container">
        <div className="row g-5">
          {products.map((product) => (
            <Link to={"/products/"+ product.id}>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <img
                  src={product.images[0]}
                  alt=""
                  style={{ width: "250px", height: "250px" }}
                />
                <h2>{product.title}</h2>
                <p>${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
