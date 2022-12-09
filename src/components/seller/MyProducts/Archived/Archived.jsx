import React, { useEffect, useState } from "react";
// react-redux
import { useSelector } from "react-redux";

const Archived = () => {
  // sProduct = seller product
  const [sProduct, setProduct] = useState([]);
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    setProduct(product);
  }, []);

  return (
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
          {sProduct.map((item, index) =>
            item.stock !== 0 ? (
              <>
                <tr
                  className="row mx-3 mt-3"
                  style={{ borderBottom: "2px solid #D4D4D4 " }}
                >
                  <td className="col-8 text-muted">
                    <div className="product-name">{item.product_name}</div>
                    <div className="img-review">
                    {item.photo ? (
                        item.photo.split("||").map(
                          (e, i, arr) => (
                            <div className="img-review col-4 mb-5">
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
                  </td>
                  <td className="col-2 text-muted">
                    $ <span>{item.price}</span>
                  </td>
                  <td className="col-2 text-muted">{item.stock}</td>
                </tr>
              </>
            ) : (
              <></>
            )
          )}
          {/* data */}
        </table>
      </div>
    </>
  )
}

export default Archived