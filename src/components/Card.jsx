import React from 'react';

const Card = ({ product }) => {
  console.log("card called");
  console.log(product.img);
  return (

      <div className="card" style={{ width: "18rem" }}>
        <img src={product.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.desc}</p>
          <a href="#" className="btn btn-primary">
            Buy Now
          </a>
        </div>
      </div>
  );
};

export default Card
