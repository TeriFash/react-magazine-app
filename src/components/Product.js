import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="neumorphic-card ">
          <div className="neumorphic-card__outer">
            <ProductConsumer>
              {value => (
                <>
                <div
                  className="img-container p-5"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <img src={img} alt="product" className="card-img-top neumorphic-image" />
                  </Link>
                  
                </div>
                <button
                    className="cart-btn neumorphic-btn-minimal"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    <div className="neumorphic-btn-minimal__back">
                      
                      {inCart ? (
                        <p className="text-capitalize mb-0" disabled>
                          In cart
                        </p>
                      ) : (
                        <span className="mr-2">
                         <i className="fas fa-cart-plus" />
                        </span>
                      )}
                      
                    </div>
                  </button>
                  </>
              )}
            </ProductConsumer>
            {/* Card footer */}
            <div className="card-footer d-flex justify-content-between">
              <p className="neumorphic-card__title align-self-center mb-0">{title}</p>
              <h5 className="neumorphic-card__text text-blue font-italic mb-0">
                <span className="mr-1">$</span>
                {price}
              </h5>
            </div>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }
  &:hover {
    .card {
      
    }
    .card-footer {
     
    }
  }
  .img-container {
    position: relative;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    
    color: var(--main-blue);
    font-size: 1rem;
    
   
    transition: all 0.6s linear;
  }

  .img-container:hover .cart-btn {
    transform: translate(-20px, -10px);
  }
  .cart-btn:hover, .cart-btn:active, .cart-btn:focus {
    border: none;
    
    cursor: pointer;
    outline: none;
  }
`;
