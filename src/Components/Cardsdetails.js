import React, { useEffect, useState } from "react";
import "./Carddetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DELETE, ADD, REMOVE } from "../Redux/Actions/Action";
import { useDispatch } from "react-redux";

const Cardsdetails = () => {
  const [data, setdata] = useState([]);

  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const getdata = useSelector((state) => state.cartreducer.carts);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setdata(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);

  const send = (e) => {
    dispatch(ADD(e));
  };

  const Remove = (id) => {
    dispatch(DELETE(id));
    navigate("/");
  };

  const removeone = (item) => {
    dispatch(REMOVE(item));
  };

  return (
    <div className="carddetails">
      <h1>Items Details Page</h1>

      {data.map((ele) => {
        return (
          <>
            <div className="carddetails-container">
              <div className="carddetails-first">
                <img className="carddetails-image" src={ele.imgdata} />
              </div>
              <div className="carddetails-second">
                <p>
                  <span className="carddetails-heading">Restaurant : </span>
                  {ele.rname}
                </p>
                <p>
                  <span className="carddetails-heading">Price : </span>
                  {ele.price}
                </p>
                <p>
                  <span className="carddetails-heading">Dishes : </span>
                  {ele.address}
                </p>
                <p>
                  <span className="carddetails-heading">Total : </span>
                  {ele.price * ele.qnty}
                </p>

                <div className="carddetails-incdec">
                  <span
                    className="carddetails-incdec-contents"
                    onClick={
                      ele.qnty < 1 ? Remove(ele.id) : () => removeone(ele)
                    }
                  >
                    -
                  </span>
                  <span className="carddetails-incdec-contents">
                    {ele.qnty}
                  </span>
                  <span
                    className="carddetails-incdec-contents"
                    onClick={() => send(ele)}
                  >
                    +
                  </span>
                </div>
              </div>
              <div className="carddetails-third">
                <p>
                  <span className="carddetails-heading">Rating : </span>
                  <span className="carddetails-rating">{ele.rating} ★</span>
                </p>
                <p>
                  <span className="carddetails-heading">Order Review : </span>
                  {ele.somedata}
                </p>
                <p>
                  <span className="carddetails-heading">Remove : </span>
                  <i
                    className="fas fa-trash carddetails-icon"
                    onClick={() => Remove(ele.id)}
                  />
                </p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Cardsdetails;
