import React, { useEffect, useState } from "react";
import "./style.css";
// react redux
import { useSelector, useDispatch } from "react-redux";
// redux action
import { updateAddress } from "../../redux/action/address";

const ChangeAddress = () => {
  const dispatch = useDispatch();
  const { address, isLoading, isError } = useSelector((state) => state.address);
  const [mainAddressData, setDataAddress] = useState([]);

  const [form, setForm] = useState({
    address_name: null,
    recipient_name: null,
    recipient_phone: null,
    address: null,
    post_code: null,
    city: null,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (address.length < 1) {
      alert("your address  data has not been set, please add your address");
    }
    if (address.length > 0) {
      setDataAddress(address[0]);
    }
  }, []);

  

  const onSubmitHandler = (e) => {
    console.log(mainAddressData)
    e.preventDefault();
    const id = mainAddressData.id_address;
    const body = {
      address_name: form.address_name,
      recipient_name: form.recipient_name,
      recipient_phone: form.recipient_phone,
      address: form.address,
      post_code: form.post_code,
      city: form.city,
    };

    const handleSuccess = (data) => {
      console.log(data);
      if (data.data.status == "success") {
        alert("success update data");
        return window.location.reload();
      }
    };

    dispatch(updateAddress(id, body, handleSuccess));
  };
  return (
    <div className="modal-dialog" style={{ maxWidth: "80%" }}>
      
        <div className="modal-content">
          <div className="modal-header" style={{ height: "150px" }}>
            <h5
              className="modal-title w-100 text-center"
              id="exampleModalLabel"
            >
              <p className={`fontBold h2`}>Change address</p>
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
                    htmlFor="exampleInputEmail1"
                    className={`form-label fontRegular text-muted`}
                  >
                    Save address as (ex: home address, office address){" "}
                  </label>
                  {mainAddressData.address_name ? (
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Rumah"
                      style={{ height: "50px" }}
                      defaultValue={mainAddressData.address_name}
                      name="address_name"
                      onChange={handleChange}
                    />
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="ex: Kantor"
                      style={{ height: "50px" }}
                      name="address_name"
                      onChange={handleChange}
                    />
                  )}
                </div>
                <div className="duo-input-row row">
                  <div className="wrapper-duo-input col-12 row">
                    <div className="col-6">
                      <div className="mb-3">
                        <label
                          htmlFor="name"
                          className={`form-label fontRegular text-muted d-flex align-items-center`}
                          style={{ height: "70px" }}
                        >
                          Recipient's name
                        </label>
                        {mainAddressData.recipient_name ? (
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder=""
                            style={{ height: "50px" }}
                            defaultValue={mainAddressData.recipient_name}
                            name="recipient_name"
                            onChange={handleChange}
                          />
                        ) : (
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder=""
                            style={{ height: "50px" }}
                            name="recipient_name"
                            onChange={handleChange}
                          />
                        )}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label
                          htmlFor="phone"
                          className={`form-label fontRegular text-muted text-muted d-flex align-items-center`}
                          style={{ height: "70px" }}
                        >
                          Recipient's telephone number
                        </label>
                        {mainAddressData.recipient_phone > 0 ? (
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder=""
                            style={{ height: "50px" }}
                            defaultValue={mainAddressData.recipient_phone}
                            name="recipient_phone"
                            onChange={handleChange}
                          />
                        ) : (
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder=""
                            style={{ height: "50px" }}
                            name="recipient_phone"
                            onChange={handleChange}
                          />
                        )}
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
                        {mainAddressData.address ? (
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder=""
                            style={{ height: "50px" }}
                            defaultValue={mainAddressData.address}
                            name="address"
                            onChange={handleChange}
                          />
                        ) : (
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder=""
                            style={{ height: "50px" }}
                            name="address"
                            onChange={handleChange}
                          />
                        )}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label
                          htmlFor="postal_code"
                          className={`form-label fontRegular text-muted text-muted d-flex align-items-center`}
                          style={{ height: "70px" }}
                        >
                          Postal code
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="postal_code"
                          placeholder=""
                          style={{ height: "50px" }}
                          defaultValue={mainAddressData.post_code}
                          name="post_code"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="duo-input-row-sect-2 row mb-3">
                  <div className="wrapper-duo-input col-12 row">
                    <div className="col-6">
                      <div className="mb-3">
                        <label
                          htmlFor="address"
                          className={`form-label fontRegular text-muted d-flex align-items-center`}
                          style={{ height: "70px" }}
                        >
                          City or Subdistrict
                        </label>
                        {mainAddressData.city ? (
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder=""
                            style={{ height: "50px" }}
                            defaultValue={mainAddressData.city}
                            name="city"
                            onChange={handleChange}
                          />
                        ) : (
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder=""
                            style={{ height: "50px" }}
                            name="city"
                            onChange={handleChange}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-submit-section">
                  <div className="wrapper d-flex flex-row-reverse gap-3">
                    <div className="button-submit">
                      <button
                        type="submit"
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
      )
    </div>
  );
};

export default ChangeAddress;