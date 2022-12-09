import React, { useState, useEffect } from "react";
// images
import menFormalSuit from "../../../../assets/images/men jacket jeans.png";
import jacketJeans from "../../../../assets/images/men formal suit.png";
// react redux
import { useSelector, useDispatch } from "react-redux";
// action

const CompletedStore = () => {
  const [orderUser, setOrderUser] = useState([]);
  const { order, isLoading } = useSelector((state) => state.order);
  useEffect(() => {
    setOrderUser(order);
  });
  return (
    <>
      {/* head */}
      <div className="table-head row">
        <div className="head-image col-2 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2 d-flex align-items-center justify-content-center">
          <p className="fontBold text-muted h5">Image</p>
        </div>
        <div className="head-desc-item col-6 d-flex align-items-center">
          <p className="fontBold text-muted h5">Item - name</p>
        </div>
        <div className="head-price col-2 col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-2 col-xxl-2 d-flex justify-content-center">
          <p className="fontBold text-muted h5">Price</p>
        </div>
        <div className="head-price col-2 col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-2 col-xxl-2 d-flex justify-content-center">
          <p className="fontBold text-muted h5">Status</p>
        </div>
      </div>
      {/* head */}
      {orderUser.map((item, index) =>
        item.status === 4 ? (
          <div className="wrapper-item-co row">
            <div className="content-img col-2 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2 d-flex align-items-center justify-content-center pt-1 pb-1">
              {item.photo ? (
                item.photo.split("||").map((e, i, arr) =>
                  // ambil data akhir
                  // arr.length - 1 === index ? (
                  // ambil data awal
                  i === 0 ? (
                    <>
                      <div
                        key={i}
                        className="img-review-1 d-flex justify-content-center mb-3"
                      >
                        <img
                          src={`${process.env.REACT_APP_BACKEND_URL}/${e}`}
                          alt="item co"
                          style={{
                            height: "100px",
                            width: "100px",
                            borderRadius: "15px",
                          }}
                        />
                      </div>
                    </>
                  ) : (
                    <></>
                  )
                )
              ) : (
                <></>
              )}
            </div>
            <div className="content-desc-item col-6 d-flex flex-column justify-content-center">
              <div className="name-item">
                <p className={`fontBold h5`}>
                  {item.product_name} -{" "}
                  <span className="color">{item.item_color}</span>
                </p>
              </div>
              <div className="brand-item">
                <p className={`fontRegular text-muted h6`}>
                  Order by {item.buyer_name}
                </p>
              </div>
            </div>
            <div className="col-2 col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-2 col-xxl-2 d-flex align-items-center justify-content-center">
              <p className={`fontBold h5`}>
                <span>$</span> {item.price}
              </p>
            </div>
            <div className="col-2 d-flex align-items-center">
              <div className="status-wrapper d-flex flex-column align-items-center">
                <p className="fontBold h5">Complete</p>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )
      )}
    </>
  );
};

export default CompletedStore;
