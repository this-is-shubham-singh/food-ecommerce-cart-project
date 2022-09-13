import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { DELETE } from "../Redux/Actions/Action";

const Header = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);

  const [price, setprice] = useState(0);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DELETE(id));
  };

  const total = () => {
    let price = 0;
    getdata.map((ele, key) => {
      price = ele.price * ele.qnty + price;
    });
    setprice(price);
  };

  useEffect(() => {
    total();
  }, [total]);
  // adding total in array so that it gets updated again and again when items are added or removed. not only when page is rendered

  return (
    <div className="header-container">
      <div className="header-left-container">
        <ul className="header-ul">
          <li>
            <NavLink className="header-links" to="/">
              Add to Cart
            </NavLink>
          </li>
          <li>
            <NavLink className="header-links header-home-link" to="/">
              Home
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="header-right-container">
        <Badge
          badgeContent={getdata.length}
          color="primary"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <i className="fa-sharp fa-solid fa-cart-shopping header-icon"></i>
        </Badge>
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {getdata.length ? (
          <div className="pop-main-container">
            <div className="pop-card-container">
              <div className="pop-heading-container">
                <h3 className="pop-heading">Photo</h3>
                <h3 className="pop-heading">Restaurant Name</h3>
              </div>
              {getdata.map((e) => {
                return (
                  <>
                    <div className="pop-content-container">
                      <div className="pop-content-container-two">
                        <div>
                          <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                            <img src={e.imgdata} className="pop-image" />
                          </NavLink>
                        </div>
                        <div className="pop-second">
                          <p>
                            <span className="pop-content-heading">
                              {e.rname}
                            </span>
                          </p>
                          <p>
                            <span className="pop-content-heading">Price :</span>
                            ₹{e.price}
                          </p>
                          <p>
                            <span className="pop-content-heading">
                              Quantity :
                            </span>
                            {e.qnty}
                          </p>
                        </div>
                        <div
                          className="pop-third"
                          onClick={() => {
                            dlt(e.id);
                          }}
                        >
                          <i className="fas fa-trash delicon"></i>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
              <p style={{ margin: "6px" }}>
                <span className="pop-total">Total :</span>₹ {}
                <span className="pop-content-heading">{price}</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="header-cartdetails-container">
            <p className="header-cart-para">Your Cart is Empty</p>
            <i
              className="fas fa-close header-cart-cross"
              onClick={handleClose}
            ></i>
          </div>
        )}
      </Menu>
    </div>
  );
};

export default Header;
