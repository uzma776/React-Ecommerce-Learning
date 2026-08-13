import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetail = () => {
      const pId = useParams()
      const [product, setProduct] = useState(null)
      console.log(pId.id)
      useEffect(()=>{
        const getProduct = async ()=>{
            try {
                
                const response = await axios.get(
                  `https://dummyjson.com/products/${pId.id}`,
                );
                setProduct(response.data)
                console.log(response.data)

                
            } catch (error) {
                console.log(error)
                
            }
        }
        getProduct()
      },[])
  return (
    <>
      <div className="container text-center mb-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <img
              src={product?.images[0]}
              alt=""
              style={{ height: "70vh", width: "50vw" }}
            />
            <h2>{product?.title}</h2>
            <p>{product?.description}</p>
            <strong>Price: ${product?.price}</strong>
            <br />
            <strong>Ratings: {product?.rating}</strong>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail
