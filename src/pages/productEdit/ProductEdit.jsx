import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavbarLogin";
import sampleImage from "../../assets/images/sample-image.png";
import dummyTools from "../../assets/images/dummy-tools.png";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// action 
import {
  getByIdProduct,
  addProductImage,
  updateProduct,
} from "../../redux/action/product";
const ProductEdit = () => {
  const [photo, setPhoto] = useState();
  const [dataProduct, setDataProduct] = useState([]);
  const [form, setForm] = useState({
    product_name: null,
    price: null,
    stock: null,
    color: null,
    size: null,
    category: null,
    condition: null,
    store_desc: null,
    photo: null,
  });
  const [loading, setLoading] = useState(true);
  const [conNew, setConNew] = useState(false);
  const [secNew, setsecNew] = useState(false);

  // get default value
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    const handleSuccess = (data) => {
      // console.log(data.data.data.rows[0])
      setDataProduct(data.data.data.rows[0]);
    };
    const onLoadData = (data) => {
      dispatch(getByIdProduct(id, handleSuccess));
    };
    onLoadData();
  }, []);

  useEffect(() => {
    if (dataProduct !== undefined) {
      setLoading(false);
    }
  });

  const toggleCheckedNew = () => {
    setConNew((prevstate) => !prevstate);
    if (conNew) {
      setForm({ ...form, condition: 0 });
    }
  };

  const toggleCheckedSecond = () => {
    setsecNew((prevstate) => !prevstate);
    if (secNew) {
      setForm({ ...form, condition: 1 });
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (photo) {
      setForm({ ...form, photo: photo });
      const id = dataProduct.id_product;
      const body = {
        photo: photo,
      };
      const handleSuccess = (data) => {
        console.log("product-photo", data);
      };
      dispatch(addProductImage(id, body, handleSuccess));
    }

    const body = {
      seller: dataProduct.id_product,
      product_name: form.product_name,
      price: parseInt(form.price),
      stock: parseInt(form.stock),
      condition: form.condition,
      color: form.color,
      size: parseInt(form.size),
      category: form.category,
      description: form.description,
    };

    const id = dataProduct.id_product;
    const handleSuccessForm = (data) => {
      console.log("product", data);
      window.location.reload();
    };
    dispatch(updateProduct(id, body, handleSuccessForm));
  };
  return (
    <>
      {loading ? (
        <>
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
        </>
      ) : (
        <>
          <div>
            <Navbar />
          </div>
          <div>
            <div className="w-90 m-3 mt-5">
              <div className="wrapper m-4">
                <form
                  className="selling-product d-flex flex-column gap-5"
                  onSubmit={(e) => onSubmitHandler(e)}
                >
                  <div className="wrapper-invent">
                    <div
                      className="space-empty mb-3"
                      style={{ height: "30px" }}
                    ></div>
                    <div className="title m-3">
                      <p className="fontBold h4">Inventory</p>
                    </div>
                    <div className="break-line mb-3"></div>
                    <div className="label ms-3 mb-3">
                      <label htmlFor="product_name" className="text-muted">
                        Name of goods
                      </label>
                    </div>
                    <div className="input-invent ms-3 ">
                      <input
                        type="text"
                        id="product_name"
                        className="form-control w-50"
                        style={{
                          height: "50px",
                          width: "100%",
                        }}
                        defaultValue={dataProduct.product_name}
                        name="product_name"
                        onChange={handleChange}
                      />
                    </div>
                    <div
                      className="space-empty mb-3"
                      style={{ height: "30px" }}
                    ></div>
                  </div>
                  <div className="wrapper-item-details">
                    <div
                      className="space-empty mb-3"
                      style={{ height: "30px" }}
                    ></div>
                    <div className="title m-3">
                      <p className="fontBold h4">Item details</p>
                    </div>
                    <div className="break-line mb-3"></div>
                    <div className="label ms-3 mb-3">
                      <label htmlFor="price" className="text-muted">
                        Unit price
                      </label>
                    </div>
                    <div className="input-price ms-3 mb-3">
                      <input
                        type="text"
                        id="price"
                        className="form-control w-50"
                        style={{
                          height: "50px",
                          width: "100%",
                        }}
                        placeholder="ex : 50"
                        defaultValue={dataProduct.price}
                        name="price"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="label ms-3 mb-3">
                      <label htmlFor="stock" className="text-muted">
                        Stock
                      </label>
                    </div>
                    <div className="input-condition ms-3 mb-3">
                      <input
                        type="text"
                        id="stock"
                        className="form-control w-50"
                        style={{
                          height: "50px",
                          width: "100%",
                        }}
                        defaultValue={dataProduct.stock}
                        placeholder="ex : 5"
                        name="stock"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="label ms-3 mb-3">
                      <label htmlFor="color" className="text-muted">
                        Color
                      </label>
                    </div>
                    <div className="input-condition ms-3 mb-3">
                      <input
                        type="text"
                        id="color"
                        className="form-control w-50"
                        style={{
                          height: "50px",
                          width: "100%",
                        }}
                        placeholder="ex : white, green, yellow"
                        defaultValue={dataProduct.color}
                        name="color"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="label ms-3 mb-3">
                      <label htmlFor="size" className="text-muted">
                        Size
                      </label>
                    </div>
                    <div className="input-condition ms-3 mb-3">
                      <input
                        type="text"
                        id="size"
                        className="form-control w-50"
                        style={{
                          height: "50px",
                          width: "100%",
                        }}
                        placeholder="1 - 5, ex : 3"
                        name="size"
                        onChange={handleChange}
                        defaultValue={dataProduct.size}
                      />
                    </div>

                    <div className="label ms-3 mb-3">
                      <label htmlFor="category" className="text-muted">
                        Category
                      </label>
                    </div>
                    <div className="input-condition ms-3 mb-3">
                      <input
                        type="text"
                        id="category"
                        className="form-control w-50"
                        style={{
                          height: "50px",
                          width: "100%",
                        }}
                        placeholder="ex : t-shirt"
                        name="category"
                        onChange={handleChange}
                        defaultValue={dataProduct.category}
                      />
                    </div>

                    <div className="label ms-3 mb-3">
                      <label htmlFor="condition" className="text-muted">
                        Kondisi{" "}
                        {dataProduct.condition === 0 ? (
                          <span className="fontBold fst-italic">Baru</span>
                        ) : (
                          <span className="fontBold fst-italic">Bekas</span>
                        )}
                      </label>
                    </div>
                    <div className="radio-menu d-flex flex-row ms-3 gap-5">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="condition"
                          id="flexRadioDefault1"
                          onClick={toggleCheckedNew}
                        />

                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Baru
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="condition"
                          id="flexRadioDefault1"
                          onClick={toggleCheckedSecond}
                        />

                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          Bekas
                        </label>
                      </div>
                    </div>

                    <div
                      className="space-empty mb-3"
                      style={{ height: "30px" }}
                    ></div>
                  </div>
                  <div className="wrapper-photo-of-goods">
                    <div
                      className="space-empty mb-3"
                      style={{ height: "30px" }}
                    ></div>
                    <div className="title m-3">
                      <p className="fontBold h4">Photo of goods</p>
                    </div>
                    <div className="break-line mb-3"></div>
                    <div className="input-photo row bg-warning mx-3">
                      <div className="col-4 bg-light d-flex flex-column">
                          {
                            dataProduct.photo ? dataProduct.photo.split("||").map((item, index,  arr) => (
                              arr.length-1 === index ? (
                                // ambil data awal
                                // index === 0 ? (
                              <>
                              <div className="img-review-1 d-flex justify-content-center mb-3">
                                
                                <img
                                  src={`${process.env.REACT_APP_BACKEND_URL}/${item}`}
                                  alt="sample image"
                                  style={{ height: "200px", width: "200px" }}
                                />
                                </div>
                              </>) : (<></>)
                                
                            )) : 
                            (
                              <img
                                src={sampleImage}
                                alt="sample image"
                                style={{ height: "200px", width: "200px" }}
                              />
                            )
                          } 
                          
                        <div className="input-photo-1 mx-3 mb-3">
                          <input
                            type="file"
                            name="photo_product_1"
                            onChange={(e) => {
                              setPhoto(e.target.files[0]);
                            }}
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-muted">Foto terbaru</p>
                        </div>
                      </div>
                      <div className="col-2 bg-light d-flex justify-content-center align-items-center flex-column">
                        <div className="img-review-1 d-flex justify-content-center align-items-center mb-3">
                          <img
                            src={sampleImage}
                            alt="sample image"
                            style={{ height: "100px", width: "100px" }}
                          />
                        </div>
                        {/* <div className="input-photo-1 mx-3 mb-3">
                  <input type="file" name="photo_product_1" value="" />
                </div> */}
                      </div>
                      <div className="col-2 bg-light d-flex justify-content-center align-items-center flex-column">
                        <div className="img-review-1 d-flex justify-content-center align-items-center mb-3">
                          <img
                            src={sampleImage}
                            alt="sample image"
                            style={{ height: "100px", width: "100px" }}
                          />
                        </div>
                        {/* <div className="input-photo-1 mx-3 mb-3">
                  <input type="file" name="photo_product_1" value="" />
                </div> */}
                      </div>
                      <div className="col-2 bg-light d-flex justify-content-center align-items-center flex-column">
                        <div className="img-review-1 d-flex justify-content-center align-items-center mb-3">
                          <img
                            src={sampleImage}
                            alt="sample image"
                            style={{ height: "100px", width: "100px" }}
                          />
                        </div>
                        {/* <div className="input-photo-1 mx-3 mb-3">
                  <input type="file" name="photo_product_1" value="" />
                </div> */}
                      </div>
                      <div className="col-2 bg-light d-flex justify-content-center align-items-center flex-column">
                        <div className="img-review-1 d-flex justify-content-center align-items-center mb-3">
                          <img
                            src={sampleImage}
                            alt="sample image"
                            style={{ height: "100px", width: "100px" }}
                          />
                        </div>
                        {/* <div className="input-photo-1 mx-3 mb-3">
                  <input type="file" name="photo_product_1" value="" />
                </div> */}
                      </div>
                    </div>
                    <div className="break-line mb-3"></div>
                    <div className="d-flex justify-content-center">
                      <p
                        className="text-muted text-center"
                        style={{
                          borderRadius: "15px",
                          border: "2px solid #D4D4D4",
                          width: "300px",
                          height: "30px",
                        }}
                      >
                        Upload foto
                      </p>
                    </div>
                    <div
                      className="space-empty mb-3"
                      style={{ height: "30px" }}
                    ></div>
                  </div>
                  <div className="wrapper-description">
                    <div
                      className="space-empty mb-3"
                      style={{ height: "30px" }}
                    ></div>
                    <div className="title m-3">
                      <p className="fontBold h4">Description</p>
                    </div>
                    <div className="break-line mb-3"></div>
                    <div className="input-description mx-3">
                      <div
                        className="dummy-img w-100 "
                        style={{ border: "2px solid #D4D4D4 " }}
                      >
                        <img src={dummyTools} alt="asdasda" className="ms-3" />
                      </div>
                      <div
                        className="input-text-area w-100"
                        style={{ border: "2px solid #D4D4D4 " }}
                      >
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="5"
                          name="description"
                          onChange={handleChange}
                          defaultValue={dataProduct.description}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row-reverse">
                    <button
                      type="submit"
                      className="bgRedPucat fontBold text-white"
                      style={{
                        height: "50px",
                        width: "150px",
                        outline: "none",
                        border: "none",
                        borderRadius: "25px",
                      }}
                    >
                      Perbaharui
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductEdit;
