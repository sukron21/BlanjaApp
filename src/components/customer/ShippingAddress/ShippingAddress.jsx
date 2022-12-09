import React, { useEffect, useState } from "react";
import AddNewAddress from "../../AddNewAddress/AddNewAddress";
import ChangeAddress from "../../ChangeAddress/ChangeAddress";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserAddresses } from "../../../redux/action/address";
import { updateCustomer } from "../../../redux/action/user";

const ShippingAddress = () => {
  const navigate = useNavigate();
  const [listAddressUser, setListAddress] = useState([]);
  const { address, isLoading, isError } = useSelector((state) => {
    return state.address;
  });
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const handleSuccess = (data) => {
      console.log("listAddress", data.data.data);
      setListAddress(data.data.data);
    };
    getUserAddresses(user.id_user, handleSuccess);
  }, []);

  const setMainAddress = (id, index) => {   
    const handleSuccess = (data) => {
      alert("success change main address")
      localStorage.clear()
      return navigate('/login')
    }
    const body = {
      main_address: id,
    }
    updateCustomer(user.id_user, body, handleSuccess);
  }

  return (
    <>
      {
      listAddressUser.length < 1 ? (
        <div className="w-90 m-3 mt-5">
          <div className="wrapper m-4">
            <div className="title mb-3">
              <p className="fontBold h4">Choose another address</p>
            </div>
            <div className="desc mb-3">
              <p className="fontMedium h6 text-muted">
                Manage your shipping address
              </p>
            </div>
            <div className="break-line mb-5"></div>
            <div className="choose-another-address-wrapper">
              <div className="button-add-new-address w-100 mb-5 d-flex justify-content-center align-items-center">
                {/* bana stand for button add new address */}
                <button
                  type="button"
                  className={`fontRegular h3 text-muted bana-customize w-80 h-100`}
                  data-bs-toggle="modal"
                  data-bs-target="#addNewAddress"
                >
                  Add new address
                </button>
              </div>
              {/* modal add new addres */}
              <div
                className="modal fade"
                id="addNewAddress"
                tabIndex="-1"
                aria-labelledby="addNewAddressLabel"
                aria-hidden="true"
              >
                <AddNewAddress />
              </div>
              {/* end of modal add new addres */}
              <div className="address-content d-flex w-100 justify-content-center align-items-center">
                <div className="container-content w-80">
                  <div className="wrapper-content m-5">
                    <div className="address-null">
                      <p className="fontBold fst-italic">
                        your address data has not been set
                      </p>
                    </div>
                    <div className="recipient-change-address mb-3">
                      {/* ca stand for change address */}
                      <button
                        type="button"
                        className={`textRedPucat button-ca fontBold h5`}
                        data-bs-toggle="modal"
                        data-bs-target="#changeAddress"
                        disabled
                      >
                        Change address
                      </button>
                    </div>
                    {/* modal change Address */}
                    <div
                      className="modal fade"
                      id="changeAddress"
                      tabIndex="-1"
                      aria-labelledby="changeAddressLabel"
                      aria-hidden="true"
                    >
                      <ChangeAddress />
                    </div>
                    {/* end of modal change Address */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        address.map((item, index) => (
          <div key={index} className="w-90 m-3 mt-5">
            <div className="wrapper m-4">
              <div className="title mb-3">
                <p className="fontBold h4">Choose another address</p>
              </div>
              <div className="desc mb-3">
                <p className="fontMedium h6 text-muted">
                  Manage your shipping address
                </p>
              </div>
              <div className="break-line mb-5"></div>
              <div className="choose-another-address-wrapper">
                <div className="button-add-new-address w-100 mb-5 d-flex justify-content-center align-items-center">
                  {/* bana stand for button add new address */}
                  <button
                    type="button"
                    className={`fontRegular h3 text-muted bana-customize w-80 h-100`}
                    data-bs-toggle="modal"
                    data-bs-target="#addNewAddress"
                  >
                    Add new address
                  </button>
                </div>
                {/* modal add new addres */}
                <div
                  className="modal fade"
                  id="addNewAddress"
                  tabIndex="-1"
                  aria-labelledby="addNewAddressLabel"
                  aria-hidden="true"
                >
                  <AddNewAddress />
                </div>
                {/* end of modal add new addres */}
                {/* address main */}
                <div className="mb-5 address-content d-flex w-100 justify-content-center align-items-center">
                  <div className="container-content w-80">
                    <div className="wrapper-content m-5">
                      <div className="recipient's-name mb-3">
                        <p className={`fontBold h5`}>{item.recipient_name}</p>
                      </div>
                      <div className="recipient-address mb-3">
                        <p className={`fontRegular h5`}>
                          <span className="address">{item.address}</span> <br />
                          <span className="city-or-subdistric">
                            Kota/kab {item.city}
                          </span>{" "}
                          <br />
                          <span className="postal-code">
                            Kode pos: {item.post_code}
                          </span>{" "}
                          <br />
                          <span className="tokopaedi-note">
                            [Tokopaedi Note: {item.address_name}] {item.city},
                          </span>{" "}
                          <br />
                          {/* <span className="postal-code">{item.post_code}</span> */}
                        </p>
                      </div>
                      <div className="recipient-change-address mb-3">
                        {/* ca stand for change address */}
                        { item.city ? (
                          <button
                          type="button"
                          className={`textRedPucat button-ca fontBold h5`}
                          data-bs-toggle="modal"
                          data-bs-target="#changeAddress"
                        >
                          Change main address data 
                        </button>
                        ) : (
                        <button
                          type="button"
                          className={`textRedPucat button-ca fontBold h5`}
                          data-bs-toggle="modal"
                          data-bs-target="#changeAddress"
                          disabled
                        >
                          Change main address data <span className="text-black fst-italic">(set main address before change this form)</span>
                        </button>
                        )}
                        
                      </div>
                      {/* modal change Address */}
                      <div
                        className="modal fade"
                        id="changeAddress"
                        tabIndex="-1"
                        aria-labelledby="changeAddressLabel"
                        aria-hidden="true"
                      >
                        <ChangeAddress />
                      </div>
                      {/* end of modal change Address */}
                    </div>
                  </div>
                </div>
                {/* address main */}

                {/* list all address user */}
                <div className="address-content d-flex w-100 justify-content-center align-items-center">
                  <div className="container-content w-80">
                    <div className="wrapper-content m-5">
                      <p>
                        <button
                          class="fontBold bgRedPucat text-white"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseListAddress"
                          aria-expanded="false"
                          aria-controls="collapseListAddress"
                          style={{
                            height: "50px",
                            width: "150px",
                            border: "2px solid #D4D4D4",
                          }}
                        >
                          List Address
                        </button>
                      </p>
                      <div class="collapse" id="collapseListAddress">
                        {/* data list address*/}
                        {listAddressUser.map((item, index) => (
                          <div class="card card-body d-flex flex-row">
                            <div className="content-wrapper-card col-6">
                              <p className="recipient_name">
                                <span className="fontBold">No</span>:{" "}
                                {index + 1}
                              </p>
                              <p className="recipient_name">
                                <span className="fontBold">Recipient name</span>
                                : {item.recipient_name}
                              </p>
                              <p className="recipient_name">
                                <span className="fontBold">
                                  Recipient phone
                                </span>
                                : {item.recipient_phone}
                              </p>
                              <p className="recipient_name">
                                <span className="fontBold">Postal Code</span>:
                                {item.post_code}
                              </p>
                              <p className="recipient_name">
                                <span className="fontBold">Address name</span>:
                                {item.address_name}
                              </p>
                              <p className="recipient_name">
                                <span className="fontBold">Address</span>:{" "}
                                {item.address}
                              </p>
                              <p className="recipient_name">
                                <span className="fontBold">City</span>:{" "}
                                {item.city}
                              </p>
                            </div>
                            <div className="button-set-main col-6 d-flex justify-content-center align-items-center">
                              <button
                                className="btn bgRedPucat text-white fontBold"
                                onClick={() => {
                                  const confirmBox = window.confirm(
                                    "you must re login to change main address ?"
                                  );

                                  if (confirmBox === true) {
                                    setMainAddress(item.id_address, index);
                                  }
                                }}
                              >
                                set to be main
                              </button>
                            </div>
                          </div>
                        ))}

                        {/* end of data list*/}
                      </div>
                    </div>
                  </div>
                </div>
                {/* list all address user by id user*/}
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ShippingAddress;
