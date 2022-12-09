import React, { useState } from "react";
// images
import mensFormalSuit from "../../../../assets/images/men jacket jeans.png";
// react redux
import { useDispatch, useSelector } from "react-redux";
// components
import {
  getUserProduct,
  deleteProduct,
} from "../../../../redux/action/product";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AllitemsStore = () => {
  const { product, isLoading, isError } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const id = user.id_seller;
    dispatch(getUserProduct(id));
    console.log(id);
  }, []);
  useEffect(() => {
    console.log(product);
    console.log(isLoading);
    console.log(isError);
  });

  // delete product
  const deleteData = (id) => {
    const handleSuccess = (data) => {
      alert("data deleted");
      console.log(data);
    };
    dispatch(deleteProduct(id, handleSuccess));
  };
  return (
    <>
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
          <div className="form-search mb-3">
            <div
              className="wrapper-search d-flex"
              style={{
                border: "1px solid #9b9b9b99",
                width: "max-content",
                background: "#FFFFFF",
                borderRadius: "15px",
              }}
            >
              <div className="icon mx-3">
                <i className="text-muted bi bi-search"></i>
              </div>
              <div className="form-search">
                <form>
                  <input
                    type="text"
                    style={{
                      outline: "none",
                      border: "none",
                      background: "#FFFFFF",
                      borderRadius: "15px",
                    }}
                    placeholder="Search"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="table-show-products">
            <table
              className="w-100"
              style={{
                border: "1px solid #9b9b9b99",
                width: "max-content",
                background: "#FFFFFF",
                borderRadius: "15px",
              }}
            >
              <tr className="row mx-3 mt-3">
                <th className="col-8 text-muted">Product Name</th>
                <th className="col-2 text-muted">Price</th>
                <th className="col-2 text-muted">Stock</th>
              </tr>

              {/* data */}
              {product.map((item, index) => (
                <tr
                  key={index}
                  className="row mx-3 mt-3 mb-3"
                  style={{ borderBottom: "2px solid #D4D4D4 " }}
                >
                  <td className="col-8 text-muted row">
                    <div className="col-6">
                      <div className="product-name">{item.product_name}</div>
                      <div className="w-100 row">
                      {item.photo ? (
                        item.photo.split("||").map(
                          (e, i, arr) => (
                            <div className="img-review col-12 mb-5">
                              <img
                                src={`${process.env.REACT_APP_BACKEND_URL}/${e}`}
                                alt="mens formal suit"
                                style={{ width: "100px", height: "100px" }}
                              />
                            </div>
                          )
                        )
                      ) : (
                        <></>
                      )}
                      </div>
                    </div>
                    <div className="col-6 d-flex flex-column">
                      <div>
                        <Link
                          to={`/edit-product/${item.id_product}`}
                          className="btn"
                        >
                          <i
                            className="bgBiruMyAccount bi bi-pencil-square"
                            style={{ width: "100px" }}
                          ></i>
                        </Link>
                      </div>
                      <div>
                        <button
                          type="button"
                          onClick={() => {
                            const confirmBox = window.confirm(
                              "are u sure to delete this data ?"
                            );

                            if (confirmBox === true) {
                              deleteData(item.id_product);
                            }
                          }}
                          className="btn"
                        >
                          <i className="bgOrenShippingAddress bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="col-2 text-muted">
                    $ <span>{item.price}</span>
                  </td>
                  <td className="col-2 text-muted">{item.stock}</td>
                </tr>
              ))}

              {/* data */}
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default AllitemsStore;
