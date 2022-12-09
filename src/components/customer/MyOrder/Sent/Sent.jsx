import React, { useState, useEffect } from "react";
// images
import menFormalSuit from "../../../../assets/images/men jacket jeans.png";
// react redux
import { useSelector, useDispatch } from "react-redux";
// action
import { updateOrderUser } from "../../../../redux/action/order";
const Sent = () => {
  const [orderUser, setOrderUser] = useState([]);
  const { order, isLoading } = useSelector((state) => state.order);
  useEffect(() => {
    setOrderUser(order);
  });


  const receiveOrder = (id, index) => {
    const handleSuccess = (data) => {
      // console.log(data);
      alert(`order product: ${orderUser[index].product_name}, with ID: BLANJA-00${orderUser[index].id_order} received`)
      return window.location.reload();
    }
    const body = {
      status: 4
    }
    updateOrderUser(id, body, handleSuccess);
  }
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
        item.status === 3 ? (
          <div key={index} className="wrapper-item-co row">
            <div className="content-img col-2 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2 d-flex align-items-center justify-content-center pt-1 pb-1">
            {item.photo ? (
                  item.photo.split("||").map((e, i, arr) =>
                    i === 0 ? (
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
                    ) : ''
                  )
                ) : ''
                }
            </div>
            <div className="content-desc-item col-6 d-flex flex-column justify-content-center">
              <div className="name-item">
                <p className={`fontBold h5`}>
                  {item.product_name} - <span className="color">{item.item_color}</span>
                </p>
              </div>
              <div className="brand-item">
                <p className={`fontRegular text-muted h6`}>{item.seller_name}</p>
              </div>
            </div>
            <div className="col-2 col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-2 col-xxl-2 d-flex align-items-center justify-content-center">
              <p className={`fontBold h5`}>
                <span>$</span> {item.price}
              </p>
            </div>
            <div className="col-2 d-flex align-items-center">
              <div className="status-wrapper d-flex flex-column align-items-center">
                <p className="fontBold h">Sent</p>
                <button
                  type="button"
                  className="fontBold text-white"
                  style={{
                    border: "none",
                    outline: "none",
                    borderRadius: "25px",
                    background: "#F01F0E",
                  }}
                  onClick={() => {
                    const confirmBox = window.confirm(
                      "have you received your order ?"
                    );

                    if (confirmBox === true) {
                      receiveOrder(item.id_order, index);
                    }
                  }}
                >
                  Goods received
                </button>
              </div>
            </div>
          </div>
        ) : ''
      )}
    </>
  );
};

export default Sent;
