import React, { useState } from "react";
// components
import AllitemsStore from "./Allitems/AllitemsStore";
import GetPaidStore from "./GetPaid/GetPaidStore";
import ProcessedStore from "./processed/ProcessedStore";
import SentStore from "./Sent/SentStore";
import CompletedStore from "./Completed/CompletedStore";
import OrderCancelStore from "./OrderCancel/OrderCancelStore";

const MyOrderStore = () => {
  const [showAllItems, setShowAllItems] = useState(false);
  const [showGetPaid, setShowGetPaid] = useState(false);
  const [showProcessed, setShowProcessed] = useState(false);
  const [showSent, setShowSent] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showOrderCancel, setShowOrderCancel] = useState(false);

  const listAllItems = () => {
    setShowAllItems(true);
    setShowGetPaid(false);
    setShowProcessed(false);
    setShowSent(false);
    setShowCompleted(false);
    setShowOrderCancel(false);
  };

  const listGetPaid = () => {
    setShowAllItems(false);
    setShowGetPaid(true);
    setShowProcessed(false);
    setShowSent(false);
    setShowCompleted(false);
    setShowOrderCancel(false);
  };

  const listProcessed = () => {
    setShowAllItems(false);
    setShowGetPaid(false);
    setShowProcessed(true);
    setShowSent(false);
    setShowCompleted(false);
    setShowOrderCancel(false);
  };

  const listSent = () => {
    setShowAllItems(false);
    setShowGetPaid(false);
    setShowProcessed(false);
    setShowSent(true);
    setShowCompleted(false);
    setShowOrderCancel(false);
  };

  const listCompleted = () => {
    setShowAllItems(false);
    setShowGetPaid(false);
    setShowProcessed(false);
    setShowSent(false);
    setShowCompleted(true);
    setShowOrderCancel(false);
  };

  const listOrderCancel = () => {
    setShowAllItems(false);
    setShowGetPaid(false);
    setShowProcessed(false);
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
                onClick={listGetPaid}
                style={
                  showGetPaid
                    ? {
                        color: "#F01F0E ",
                        borderRadius: "0%",
                        borderBottom: "5px solid #F01F0E",
                        fontWeight: "bolder",
                      }
                    : {}
                }
              >
                Get paid
              </button>
            </li>
            <li className="col-2">
              <button
                type="button"
                className="btn"
                onClick={listProcessed}
                style={
                  showProcessed
                    ? {
                        color: "#F01F0E ",
                        borderRadius: "0%",
                        borderBottom: "5px solid #F01F0E",
                        fontWeight: "bolder",
                      }
                    : {}
                }
              >
                Processed
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
          {showAllItems ? <AllitemsStore /> : <></>}

          {showGetPaid ? <GetPaidStore /> : <></>}
          {showProcessed ? <ProcessedStore /> : <></>}
          {showSent ? <SentStore /> : <></>}
          {showCompleted ? <CompletedStore /> : <></>}
          {showOrderCancel ? <OrderCancelStore /> : <></>}
        </div>
      </div>
    </div>
  );
};

export default MyOrderStore;
