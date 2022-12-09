import React, { useEffect, useState } from "react";
import "./style.css";
import sampleImage from "../../../assets/images/sample-image.png";
import dummyTools from "../../../assets/images/dummy-tools.png";
import { useSelector, useDispatch } from "react-redux";
import { insertProduct } from "../../../redux/action/product";
import Swal from 'sweetalert2';

const SellingProduct = () => {
  // page logic
  const dispatch = useDispatch();
  const [dataUser, setDataUser] = useState([]);
  const [newCon, setNewCon] = useState(false);
  const [secCon, setSecCon] = useState(false);
  const [photo, setPhoto] = useState();
  const [form, setForm] = useState({
    product_name: "",
    price: "",
    stock: "",
    condition: "",
    color: "",
    size: "",
    category: "",
    description: "",
  });
  
  const {user} = useSelector((state) => state.user);
  useEffect(() => {
    setDataUser(user)
  })
  const toggleCheckedNew = () => {
    setNewCon((prevstate) => !prevstate);
    if (newCon) {
      setForm({ ...form, condition: 0 });
    }
  };

  const toggleCheckedSecond = () => {
    setSecCon((prevstate) => !prevstate);
    if (secCon) {
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
    const handleSuccess = async(data) => {
      console.log("insert", data);
      if(data.data.status === 'success'){
        await Swal.fire({
          icon: 'success',
          title: 'New product posted successfully!',
          showConfirmButton: false,
          timer: 1800,
        })
        return window.location.reload();
      }
    };

    const body = {
      seller: dataUser.id_seller,
      product_name: form.product_name,
      price: parseInt(form.price),
      stock: parseInt(form.stock),
      condition: form.condition,
      color: form.color,
      size: form.size,
      category: form.category,
      description: form.description,
      photo: photo,
    };
    console.log(body);
    dispatch(insertProduct(body, handleSuccess));
  };
  
  return (
    <div className="w-90 m-3 mt-5">
      <div className="wrapper m-4">
        <form
          className="selling-product d-flex flex-column gap-5"
          onSubmit={(e) => onSubmitHandler(e)}
        >
          <div className="wrapper-invent">
            <div className="space-empty mb-3" style={{ height: "30px" }}></div>
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
                name="product_name"
                onChange={handleChange}
              />
            </div>
            <div className="space-empty mb-3" style={{ height: "30px" }}></div>
          </div>
          <div className="wrapper-item-details">
            <div className="space-empty mb-3" style={{ height: "30px" }}></div>
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
                placeholder="1 - 5, ex : 1,2,3,4,5"
                name="size"
                onChange={handleChange}
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
              />
            </div>

            <div className="label ms-3 mb-3">
              <label htmlFor="condition" className="text-muted">
                Kondisi
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
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Baru
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="condition"
                  id="flexRadioDefault2"
                  onClick={toggleCheckedSecond}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Bekas
                </label>
              </div>
            </div>
            <div className="make-sure-condition ms-3"><p className="font-weight-bold fs-italic" style={{color:"#F01F0E"}}>Please double click to make sure the data inserted</p></div>

            <div className="space-empty mb-3" style={{ height: "30px" }}></div>
          </div>
          <div className="wrapper-photo-of-goods">
            <div className="space-empty mb-3" style={{ height: "30px" }}></div>
            <div className="title m-3">
              <p className="fontBold h4">Photo of goods</p>
            </div>
            <div className="break-line mb-3"></div>
            <div className="input-photo row bg-warning mx-3">
              <div className="col-4 bg-light d-flex flex-column">
                <div className="img-review-1 d-flex justify-content-center mb-3">
                  <img
                    src={sampleImage}
                    alt="sample image"
                    style={{ height: "200px", width: "200px" }}
                  />
                </div>
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
                  <p className="text-muted">Foto utama</p>
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
            <div className="space-empty mb-3" style={{ height: "30px" }}></div>
          </div>
          <div className="wrapper-description">
            <div className="space-empty mb-3" style={{ height: "30px" }}></div>
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
              Jual
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellingProduct;
