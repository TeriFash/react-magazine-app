import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9  mx-auto col-md-6 col-lg-3 my-3">
        <div className="neumorphic-card mx-auto">
          <div className="neumorphic-card__outer">
            <ProductConsumer>
              {value => (
                <div
                  className="img-container p-5"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <img src={img} alt="product" className="card-img-top neumorphic-image" />
                  </Link>
                  <button
                    className="cart-btn neumorphic-btn-progress"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    <div className="neumorphic-btn-progress__back">
                      <div className="neumorphic-btn-progress__bg">
                      {inCart ? (
                        <p className="text-capitalize mb-0" disabled>
                          In cart
                        </p>
                      ) : (
                        <span>+</span>
                      )}
                      </div>
                    </div>
                  </button>
                </div>
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
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
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
    
    
    position: absolute;
    
    bottom: -2px;
    right: -2px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
    color: var(--main-white);
    font-size: 1.1rem;
    
    transform: translate(100%, 100%);
    transition: all 0.6s linear;
  }

  .cart-btn span {
    font-size: 1.4rem;
  }

  .img-container:hover .cart-btn {
    transform: translate(-20px, -10px);
  }
  .cart-btn:hover, .cart-btn:active, .cart-btn:focus {
    border: none;
    color: var(--main-white);
    cursor: pointer;
    outline: none;
  }
`;
