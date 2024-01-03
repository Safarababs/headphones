import React from 'react';
import product1 from "./images/final/5.png";
import product2 from "./images/final/3.png";
import product3 from "./images/final/4.png";
import product4 from "./images/final/6.png";

const Products = () => {
  return (
    <section className='product' id='product'>
        <h1 className='heading'>products</h1>
        <h1 className='title'>affordable products at great price</h1>

        <div className="box-container">

    <div className="box">
        <h3>new headphones</h3>
        <img src={product1} alt="" />
        <span className="price">$50/-</span>
        <a href="https://safarababs.github.io/safarweb/"><button className="btn">buy now</button></a>
    </div>

    <div className="box">
        <h3>new headphones</h3>
        <img src={product2} alt="" />
        <span className="price">$40/-</span>
        <a href="https://safarababs.github.io/safarweb/"><button className="btn">buy now</button></a>
    </div>

    <div className="box">
        <h3>new headphones</h3>
        <img src={product3} alt="" />
        <span className="price">$60/-</span>
        <a href="https://safarababs.github.io/safarweb/"><button className="btn">buy now</button></a>
    </div>

    <div className="box">
        <h3>new headphones</h3>
        <img src={product4} alt="" />
        <span className="price">$55/-</span>
        <a href="https://safarababs.github.io/safarweb/"><button className="btn">buy now</button></a>
    </div>

</div>
    </section>
  )
}

export default Products