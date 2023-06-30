import React from "react";
import product1 from '../images/image-product-1.jpg'
import product2 from '../images/image-product-2.jpg'
import product3 from '../images/image-product-3.jpg'
import product4 from '../images/image-product-4.jpg'
import thumbnail1 from '../images/image-product-1-thumbnail.jpg'
import thumbnail2 from '../images/image-product-2-thumbnail.jpg'
import thumbnail3 from '../images/image-product-3-thumbnail.jpg'
import thumbnail4 from '../images/image-product-4-thumbnail.jpg'
import plus from '../images/icon-plus.svg'
import minus from '../images/icon-minus.svg'
import addcart from '../images/icon-cart.svg'


export default function Maincontent(){

    return (
        <section className="main-content">
            <div className="showcase">
                <div className="preview">
                    <img src={product1} alt= "product1" />
                </div>
                <div className="thumbnail">
                    <img src={thumbnail1} alt= "thumbnail1" />
                    <img src={thumbnail2} alt= "thumbnail2" />
                    <img src={thumbnail3} alt= "thumbnail3" />
                    <img src={thumbnail4} alt= "thumbnail4" />
                </div>
            </div>

            <div className="informations">
                <p className="company">SNEAKER COMPANY</p>
                <h3 className="title">Fall Limited Edition Sneakers</h3>
                <p className="details">These low-profile sneakers are your perfect casual wear
                    companion. Featuring a durable rubber outer sole. They'll withstand everything the weather can offer
                </p>
                <div className="price">
                    <h3 className="prices">$125.00</h3>
                    <div className="discount">50%</div>
                </div>
                <p className="old-price">$250.00</p>

                <div className="buy">
                    <div className="addsub">
                        <img src={minus} alt="minus-sign"/>
                        <p className="total">0</p>
                        <img src={plus} alt="plus-sign"/>
                    </div>

                    <button className="addtocart"><img src={addcart} alt="carts"/><p className="Add-to-cart">Add to cart</p></button>
                </div>
            </div>
        </section>

    )
}