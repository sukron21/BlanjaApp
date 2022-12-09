import React, { useState, useEffect } from "react";

import MyProfileStore from "../MyProfileStore/MyProfileStore";
import MyProducts from "../MyProducts/MyProducts";
import SellingProduct from "../SellingProduct/SellingProduct";
import MyOrderStore from "../MyOrder/MyOrderStore";
import { useDispatch, useSelector } from "react-redux";
import { getUserProduct } from "../../../redux/action/product";
import { getOrderSeller } from "../../../redux/action/order";


const MainContentSeller = () => {
  const [showMyProfileStore, setShowMyProfileStore] = useState(false);
  const [showMyProducts, setShowMyProducts] = useState(false);
  const [showSellingProduct, setShowSellingProduct] = useState(false);
  const [showMyOrder, setShowMyOrder] = useState(false);

  const editProfileStore = () => {
    setShowMyProfileStore(true);
    setShowMyProducts(false);
    setShowSellingProduct(false);
    setShowMyOrder(false);
  };

  const listMyProducts = () => {
    setShowMyProfileStore(false);
    setShowMyProducts(true);
    setShowSellingProduct(false);
    setShowMyOrder(false);
  };

  const addSellingProduct = () => {
    setShowMyProfileStore(false);
    setShowMyProducts(false);
    setShowSellingProduct(true);
    setShowMyOrder(false);
  };

  const listMyOrder = () => {
    setShowMyProfileStore(false);
    setShowMyProducts(false);
    setShowSellingProduct(false);
    setShowMyOrder(true);
  };

  const { user, isLoading, isError } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProduct(user.id_user))
    dispatch(getOrderSeller(user.id_user))
    dispatch(getUserProduct(user.id_user))
  }, [])

  return (
    <>
      { isLoading ? (
        <div className="middle">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
          <div className="bar bar4"></div>
          <div className="bar bar5"></div>
          <div className="bar bar6"></div>
          <div className="bar bar7"></div>
          <div className="bar bar8"></div>
        </div>
      ) : isError ? (
        <>Error</>
      ) : (
        <div className="wrapper-content row">
          <div className="aside-nav col-4 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
            <div className="wrapperr-content-aside-nav d-flex flex-column align-items-center">
              <div className="space-empty" style={{ height: "50px" }}></div>
              <div className="d-flex flex-row">
                <div className="image-content">
                  <img
                    src={`${process.env.REACT_APP_BACKEND_URL}/${user.image}`}
                    alt="avatar_user"
                    style={{
                      borderRadius: "50%",
                      width: "75px",
                      height: "75px",
                    }}
                  />
                </div>
                <div className="name-info-edit d-flex flex-column justify-content-center align-items-center ms-3">
                  <div className="name">
                    <p className="fontBold h5">{user.name}</p>
                  </div>
                  <div className="edit-profile-button">
                    <button
                      className="btn d-flex flex-row gap-2"
                      type="button"
                      onClick={editProfileStore}
                    >
                      <div className="icon fontBold text-muted h6">
                        <i className="bi bi-pencil-fill"></i>
                      </div>
                      <div>
                        <p className="fontBold text-muted h6">Ubah profile</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-empty" style={{ height: "50px" }}></div>
              <div className="navigation-side mb-3 w-100 d-flex flex-column align-items-center gap-5 justify-content-center ">
                <div className="wrapper w-70 row ">
                  <div className="col-12 row">
                    <div className="col-4  d-flex justify-content-center align-items-center">
                      <div
                        className="icon-my-account bgBiruMyAccount d-flex justify-content-center align-items-center"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      >
                        <i className="textWhiteBening bi bi-person"></i>
                      </div>
                    </div>
                    <div className="col-8 d-flex justify-content-center align-items-center">
                      <button
                        type="button"
                        className="btn"
                        style={
                          showMyProfileStore
                            ? {
                                background: "none",
                                borderRadius: "0%",
                                fontWeight: "bolder",
                              }
                            : {}
                        }
                        onClick={editProfileStore}
                      >
                        <div className="my-account-button fontRegular">
                          Store Profile
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="wrapper w-70 row ">
                  <div className="col-12 row">
                    <div className="col-4  d-flex justify-content-center align-items-center">
                      <div
                        className="icon-my-account bgOrenShippingAddress d-flex justify-content-center align-items-center"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      >
                        <i className="textWhiteBening bi bi-geo-alt"></i>
                      </div>
                    </div>
                    <div className="col-8 d-flex justify-content-center align-items-center">
                      <button
                        type="button"
                        className="btn dropdown-toggle"
                        id="dropdownProduct"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={
                          showMyProducts || showSellingProduct
                            ? {
                                background: "none",
                                borderRadius: "0%",
                                fontWeight: "bolder",
                              }
                            : {}
                        }
                      >
                        <div className="my-account-button fontRegular">
                          Product
                        </div>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownProduct"
                      >
                        <li>
                          <button
                            className="dropdown-item fontRegular"
                            style={
                              showMyProducts
                                ? {
                                    background: "none",
                                    borderRadius: "0%",
                                    fontWeight: "bolder",
                                  }
                                : {}
                            }
                            onClick={listMyProducts}
                          >
                            My Products
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item fontRegular"
                            style={
                              showSellingProduct
                                ? {
                                    background: "none",
                                    borderRadius: "0%",
                                    fontWeight: "bolder",
                                  }
                                : {}
                            }
                            onClick={addSellingProduct}
                          >
                            Selling Products
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="wrapper w-70 row ">
                  <div className="col-12 row">
                    <div className="col-4  d-flex justify-content-center align-items-center">
                      <div
                        className="icon-my-account bgMerahMyOrder d-flex justify-content-center align-items-center"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      >
                        <i className="textWhiteBening bi bi-bag"></i>
                      </div>
                    </div>
                    <div className="col-8 d-flex justify-content-center align-items-center">
                      <button
                        type="button"
                        className="btn"
                        style={
                          showMyOrder
                            ? {
                                background: "none",
                                borderRadius: "0%",
                                fontWeight: "bolder",
                              }
                            : {}
                        }
                        onClick={listMyOrder}
                      >
                        <div className="my-account-button fontRegular">
                          Order
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aside-content col-8 col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 d-flex justify-content-center">
            {showMyProfileStore ? <MyProfileStore /> : <></>}
            {showMyProducts ? <MyProducts /> : <></>}
            {showSellingProduct ? <SellingProduct /> : <></>}
            {showMyOrder ? <MyOrderStore /> : <></>}
          </div>
        </div>
      )}
    </>
  );
};

export default MainContentSeller;
