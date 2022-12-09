import React from 'react'
import goPay from "../../assets/images/go pay.png";
import masterCard from "../../assets/images/master card.png";
import ovo from "../../assets/images/ovo.jpg"
import "./style.css"
import axios from "axios";
import { useState } from 'react';
import { useSelector } from 'react-redux';

const SelectPayment = () => {
  const Total_Bayar = JSON.parse(localStorage.getItem("Pembayaran"));
  const addres = JSON.parse(localStorage.getItem("address"));
  const [method, setMethod]=useState(null);
  const user = useSelector((state)=>state.user.user);

  const handlePost = async() => {
    const dataOrder = JSON.parse(localStorage.getItem("order"));
    
    await dataOrder.map((e, i) => {
      const body = {
        userid: user.id_user,
        id_order: e.id_order,
        id_address:addres.id_address,
        payment_method: method,
        quantity: e.quantity,
        price: e.price,
        id: e.id_product,
        stockProduk: e.stock,
      };
      
      axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/transaction`, body)
      .then((res) => {
        alert("Transaction " + i + " added successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to add Transaction");
      });
    })
  };

  return (
    <div className="modal-dialog responsive-select-payment" style={{ maxWidth: "50%" }}>
                    <div className="modal-content">
                      <div
                        className="modal-header d-flex flex-row"
                        style={{ height: "100px" }}
                      >
                        <div className="button-close col-2 h-100 d-flex align-items-center justify-content-center">
                          <button
                            type="button"
                            className="btn-close h-100 w-100"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="title col-10 text-start h-100 d-flex align-items-center">
                          <p className="fontBold h3">Payment</p>
                        </div>
                      </div>
                      <div className="modal-body">
                        <div className="wrapper m-5">
                          <div className="mb-3">
                            <p className="fontBold h5">Payment method</p>
                          </div>
                          <div className="form-wrapper">
                            <form onSubmit={handlePost}>
                              <div className="payment-wrapper">
                                <div className="payment-method-1 row mb-5">
                                  <div className="col-4 d-flex justify-content-center align-items-center">
                                    <img
                                      src={goPay}
                                      alt="gopay icon"
                                      style={{ height: "25px", width: "100px" }}
                                    />
                                  </div>
                                  <div
                                    className="col-6 d-flex align-items-center"
                                    style={{ height: "50px" }}
                                  >
                                    <p className="fontBold h5 pt-3">Gopay</p>
                                  </div>
                                  <div className="col-2 d-flex justify-content-center align-items-center">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        value="gopay"
                                        name="flexRadioDefault"
                                        id="flexCheckIndeterminate"
                                        onChange={(e)=>setMethod(e.target.value)}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="payment-method-2 row mb-5">
                                  <div className="col-4 d-flex justify-content-center align-items-center">
                                    <img src={ovo} style={{width:'70px'}} alt="gopay icon" />
                                  </div>
                                  <div
                                    className="col-6 d-flex align-items-center"
                                    style={{ height: "50px" }}
                                  >
                                    <p className="fontBold h5 pt-3">
                                      OVO
                                    </p>
                                  </div>
                                  <div className="col-2 d-flex justify-content-center align-items-center">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        value="OVO"
                                        name="flexRadioDefault"
                                        id="flexCheckIndeterminate"
                                        onChange={(e)=>setMethod(e.target.value)}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="payment-method-3 row mb-5">
                                  <div className="col-4 d-flex justify-content-center align-items-center">
                                    <img src={masterCard} alt="gopay icon" />
                                  </div>
                                  <div
                                    className="col-6 d-flex align-items-center"
                                    style={{ height: "50px" }}
                                  >
                                    <p className="fontBold h5 pt-3">
                                      Mastercard
                                    </p>
                                  </div>
                                  <div className="col-2 d-flex justify-content-center align-items-center">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        value="master card"
                                        name="flexRadioDefault"
                                        id="flexCheckIndeterminate"
                                        onChange={(e)=>setMethod(e.target.value)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="shopping-summary-wrapper">
                                <div className="title mb-3">
                                  <p className="fontBold h5">
                                    Shopping summary
                                  </p>
                                </div>
                                <div className="order row">
                                  <div className="col-6">
                                    <p className="fontBold text-muted h5">
                                      Order
                                    </p>
                                  </div>
                                  <div className="col-6 text-end">
                                    <p className="fontBold h5">
                                      $ <span>{Total_Bayar}</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="delivery row">
                                  <div className="col-6">
                                    <p className="fontBold text-muted h5">
                                      Tax
                                    </p>
                                  </div>
                                  <div className="col-6 text-end">
                                    <p className="fontBold h5">
                                       <span>5%</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="space-empty" style={{height:"150px"}}>
                                  
                                </div>
                                <div className="shopping-sum row">
                                  <div className="col-6 d-flex flex-column">
                                    <div className="title">
                                      <p className="fontBold h5">Shopping summary</p>  
                                    </div>
                                    <div className="total-shopping">
                                      <p className="textRedPucat fontBold h5">$ <span>{Total_Bayar+(5/100*Total_Bayar)}</span></p>
                                    </div>
                                  </div>
                                  <div className="col-6 d-flex flex-row-reverse align-items-center">
                                    <div className="button-buy">
                                      <button type="submit" className="button-buy-customize bgRedPucat fontBold textWhiteBening">buy</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                      </div>
                    </div>
                  </div>
  )
}

export default SelectPayment