import React, { useState } from "react";
// components
import Allitems from "./Allitems/Allitems";
import Packed from "./Packed/Packed";
import Sent from "./Sent/Sent";
import Completed from "./Completed/Completed"
import OrderCancel from "./OrderCancel/OrderCancel"
import Payment from "./Payment/Payment";

const MyOrder = () => {
  const [showAllItems, setShowAllItems] = useState(false);
  const [showPaymentStatus, setShowPayment] = useState(false)
  const [showPacked, setShowPacked] = useState(false);
  const [showSent, setShowSent] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showOrderCancel, setShowOrderCancel] = useState(false);

  const listAllItems = () => {
    setShowAllItems(true);
    setShowPayment(false);
    setShowPacked(false);
    setShowSent(false);
    setShowCompleted(false);
    setShowOrderCancel(false);
  };

  const listPaymentStatus = () => {
    setShowAllItems(false);
    setShowPayment(true);
    setShowPacked(false);
    setShowSent(false);
    setShowCompleted(false);
    setShowOrderCancel(false);
  }

  const listPacked = () => {
    setShowAllItems(false);
    setShowPayment(false)
    setShowPacked(true);
    setShowSent(false);
    setShowCompleted(false);
    setShowOrderCancel(false);
  };

  const listSent = () => {
    setShowAllItems(false);
    setShowPayment(false)
    setShowPacked(false);
    setShowSent(true);
    setShowCompleted(false);
    setShowOrderCancel(false);
  };

  const listCompleted = () => {
    setShowAllItems(false);
    setShowPayment(false)
    setShowPacked(false);
    setShowSent(false);
    setShowCompleted(true);
    setShowOrderCancel(false);
  };

  const listOrderCancel = () => {
    setShowAllItems(false);
    setShowPayment(false)
    setShowPacked(false);
    setShowSent(false);
    setShowCompleted(false);
    setShowOrderCancel(true);
  };
  return (
    <div className="w-90 m-3 mt-5">
      <div className="wrapper m-4">
        <div className="title mb-3">
          <p className="fontBold h4">My Order</p>
        </div>
        <div className="nav-menu">
          <ul className="row list-unstyled">
            <li className="col-2">
              <button
                type="button"
                className="btn"
                onClick={listAllItems}
                style={
                  showAllItems
                    ? {
                        color: "#F01F0E ",
                        borderRadius: "0%",
                        borderBottom: "5px solid #F01F0E",
                        fontWeight: "bolder",
                      }
                    : {}
                }
              >
                All items
              </button>
            </li>
            <li className="col-2">
              <button
                type="button"
                className="btn"
                onClick={listPaymentStatus}
                style={
                  showPaymentStatus
                    ? {
                        color: "#F01F0E ",
                        borderRadius: "0%",
                        borderBottom: "5px solid #F01F0E",
                        fontWeight: "bolder",
                      }
                    : {}
                }
              >
                Payment Status
              </button>
            </li>
            <li className="col-2">
              <button
                type="button"
                className="btn"
                onClick={listPacked}
                style={
                  showPacked
                    ? {
                        color: "#F01F0E ",
                        borderRadius: "0%",
                        borderBottom: "5px solid #F01F0E",
                        fontWeight: "bolder",
                      }
                    : {}
                }
              >
                Packed
              </button>
            </li>
            <li className="col-2">
              <button
                type="button"
                className="btn"
                onClick={listSent}
                style={
                  showSent
                    ? {
                        color: "#F01F0E ",
                        borderRadius: "0%",
                        borderBottom: "5px solid #F01F0E",
                        fontWeight: "bolder",
                      }
                    : {}
                }
              >
                Sent
              </button>
            </li>
            <li className="col-2">
              <button
                type="button"
                className="btn"
                onClick={listCompleted}
                style={
                  showCompleted
                    ? {
                        color: "#F01F0E ",
                        borderRadius: "0%",
                        borderBottom: "5px solid #F01F0E",
                        fontWeight: "bolder",
                      }
                    : {}
                }
              >
                Completed
              </button>
            </li>
            <li className="col-2">
              <button
                type="button"
                className="btn"
                onClick={listOrderCancel}
                style={
                  showOrderCancel
                    ? {
                        color: "#F01F0E ",
                        borderRadius: "0%",
                        borderBottom: "5px solid #F01F0E",
                        fontWeight: "bolder",
                      }
                    : {}
                }
              >
                Order cancel
              </button>
            </li>
          </ul>
        </div>
        <div className="break-line mb-5"></div>
        <div className="mb-5">
            {showAllItems ? <Allitems/> : <></>}
            {showPaymentStatus ? <Payment/> : <></>}
            {showPacked ? <Packed/> : <></>}
            {showSent ? <Sent/> : <></>}
            {showCompleted ? <Completed/> : <></>}
            {showOrderCancel ? <OrderCancel/> : <></>}
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
