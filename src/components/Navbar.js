import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm py-sm-2 px-sm-5">
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
        <Link className="navbar-brand-block" to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        {/* <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul> */}
        <Link to="/cart" className="ml-auto">
          <ButtonContainer className="neumorphic-btn navbar-btn m-0">
              <span className="mr-2">
                <i class="fas fa-shopping-cart" />
              </span>
              Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  .nav-link {
    color: var(--color-gray) !important;
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`;
