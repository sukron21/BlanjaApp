import React, { useEffect, useState } from "react";
// images
import menFormalSuit from "../../../../assets/images/men jacket jeans.png";
// action
import { getOrderUser } from "../../../../redux/action/order";
// react-redux
import { useSelector, useDispatch } from "react-redux";

const AllitemsStore = () => {
  const dispatch = useDispatch();
  const [orderUser, setOrderUser] = useState([]);
  const { user } = useSelector((state) => {
    return state.user;
  });
  const { order, isLoading, isError } = useSelector((state) => state.order);
  

  useEffect(() => {
    setOrderUser(order);
  }, []);

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

      {/* sect1 */}
      {isLoading ? (
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
      ) : (
        <>
          {orderUser.map((item, index) => (
            <div key={index} className="wrapper-item-co row">
              <div className="content-img col-2 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2 d-flex align-items-center justify-content-center pt-1 pb-1">
                {item.photo ? (
                  item.photo.split("||").map((e, i, arr) =>
                    // ambil data akhir
                    // arr.length - 1 === index ? (
                    // ambil data awal
                    i === 0 ? (
                      <>
                        <div key={i} className="img-review-1 d-flex justify-content-center mb-3">
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
                <div className="brand-item seller-name">
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
                <p className="fontBold h">
                  {item.status === 0 ? (
                    <>unpaid</>
                  ) : item.status === 1 ? (
                    <>paid</>
                  ) : item.status === 2 ? (
                    <>packed</>
                  ) : item.status === 3 ? (
                    <>sent</>
                  ) : item.status === 4 ? (
                    <>complete</>
                  ) : item.status === 5 ? (
                    <>canceled</>
                  ) : (
                    <></>
                  )}
                </p>
              </div>
            </div>
          ))}
        </>
      )}
      {/* sect1 */}
    </>
  );
};

export default AllitemsStore;
