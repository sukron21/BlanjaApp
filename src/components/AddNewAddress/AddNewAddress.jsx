import React, { useEffect, useState } from "react";
// redux action
import { insertAddress } from "../../redux/action/address";
// react redux
import { useSelector, useDispatch } from "react-redux";
import { updateCustomer } from "../../redux/action/user";

const AddNewAddress = () => {
  const { user, isLoading, isError } = useSelector((state) => {
    return state.user;
  });
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    address_name: "",
    recipient_name: "",
    recipient_phone: "",
    address: "",
    post_code: "",
    city: "",
  });
  useEffect(() => {
    console.log(user)
  }, [])

  const [main_address_bool, setMainAddress] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const toggleChecked = () => {
    setMainAddress((prevstate) => !prevstate);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const handleSuccess = (data) => {

      if(main_address_bool) {
        const dataSuccess = data.data.data[0];

      const main_address = dataSuccess.addressid;
      const bodyUser = {
        main_address : main_address
      }
      const updateSuccess = (res) => {
        console.log(res)
      }
      
        dispatch(updateCustomer(user.id_user, bodyUser, updateSuccess))
      
      }
      
      alert("Insert Success");
      return window.location.reload();
    };

    const body = {
      userid: user.id_user,
      address_name: form.address_name,
      recipient_name: form.recipient_name,
      recipient_phone: form.recipient_phone,
      address: form.address,
      post_code: form.post_code,
      city: form.city,
    };
    // return console.log(body);
    dispatch(insertAddress(body, handleSuccess));
    
  };
  return (
    <div className="modal-dialog" style={{ maxWidth: "80%" }}>
      <div className="modal-content">
        <div className="modal-header" style={{ height: "150px" }}>
          <h5 className="modal-title w-100 text-center" id="exampleModalLabel">
            <p className={`fontBold h2`}>Add new address</p>
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <div className="form-wrapper mx-5">
            <form onSubmit={(e) => onSubmitHandler(e)}>
              <div className="mb-3">
                <label
                  htmlFor="address_name"
                  className={`form-label fontRegular text-muted`}
                >
                  Save address as (ex: home address, office address){" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address_name"
                  placeholder="Rumah"
                  style={{ height: "50px" }}
                  name="address_name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="duo-input-row row">
                <div className="wrapper-duo-input col-12 row">
                  <div className="col-6">
                    <div className="mb-3">
                      <label
                        htmlFor="recipient_name"
                        className={`form-label fontRegular text-muted d-flex align-items-center`}
                        style={{ height: "70px" }}
                      >
                        Recipient's name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient_name"
                        placeholder=""
                        style={{ height: "50px" }}
                        name="recipient_name"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label
                        htmlFor="recipient_phone"
                        className={`form-label fontRegular text-muted text-muted d-flex align-items-center`}
                        style={{ height: "70px" }}
                      >
                        Recipient's telephone number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient_phone"
                        placeholder=""
                        style={{ height: "50px" }}
                        name="recipient_phone"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="duo-input-row-sect-2 row">
                <div className="wrapper-duo-input col-12 row">
                  <div className="col-6">
                    <div className="mb-3">
                      <label
                        htmlFor="address"
                        className={`form-label fontRegular text-muted d-flex align-items-center`}
                        style={{ height: "70px" }}
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder=""
                        style={{ height: "50px" }}
                        name="address"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label
                        htmlFor="post_code"
                        className={`form-label fontRegular text-muted text-muted d-flex align-items-center`}
                        style={{ height: "70px" }}
                      >
                        Postal code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="post_code"
                        placeholder=""
                        style={{ height: "50px" }}
                        name="post_code"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="duo-input-row-sect-2 row">
                <div className="wrapper-duo-input col-12 row">
                  <div className="col-6">
                    <div className="mb-3">
                      <label
                        htmlFor="city"
                        className={`form-label fontRegular text-muted d-flex align-items-center`}
                        style={{ height: "70px" }}
                      >
                        City or Subdistrict
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder=""
                        style={{ height: "50px" }}
                        name="city"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="main_address"
                  id="main_address"
                  onClick={toggleChecked}
                />
                <label
                  className={`form-check-label fontRegular text-muted`}
                  htmlFor="main_address"
                >
                  Make it the primary address
                </label>
              </div>
              <div className="button-submit-section">
                <div className="wrapper d-flex flex-row-reverse gap-3">
                  <div className="button-submit">
                    <button
                      type="submit"
                      id="checkbox"
                      className="bgRedPucat button-submit-custom fontBold text-white h5"
                    >
                      Save
                    </button>
                  </div>
                  <div className="button-submit">
                    <button
                      type="button"
                      className="button-cancel-custom fontBold text-muted h5"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
};

export default AddNewAddress;