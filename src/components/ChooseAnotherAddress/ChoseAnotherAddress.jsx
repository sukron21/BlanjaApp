import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getByMainAddress } from "../../redux/action/address";

const ChoseAnotherAddress = () => {
  return (
    <div className="modal-dialog" style={{ maxWidth: "80%" }}>
      <div className="modal-content">
        <div className="modal-header" style={{ height: "150px" }}>
          <h5
            className="modal-title d-flex justify-content-center align-items-center vw-100"
            id="staticBackdropLabel"
          >
            <p className={`fontBold h2`}>Choose another address</p>
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body d-flex flex-column">
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
          <div className="address-content d-flex w-100 justify-content-center align-items-center">
            <div className="container-content w-80">
              <div className="wrapper-content m-5">
                <div className="recipient's-name mb-3">
                  <p className={`fontBold h5`}>Andreas jane</p>
                </div>
                <div className="recipient-address mb-3">
                  <p className={`fontRegular h5`}>
                    <span className="address">
                      Perumahan Sapphire Mediterania, wradadi. Kec. Sokaraja
                    </span>{" "}
                    <span className="city-or-subdistric">
                      Kabupaten Banyumas, Jawa Tengah.
                    </span>{" "}
                    <span className="postal-code">53181</span>{" "}
                    <span className="tokopaedi-note">
                      [Tokopaedi Note: blok c 16] Sokaraja. Kab. Banyumas,
                    </span>{" "}
                    <span className="postal-code">53181</span>
                  </p>
                </div>
                <div className="recipient-change-address mb-3">
                  {/* ca stand for change address */}
                  <button
                    type="button"
                    className={`textRedPucat button-ca fontBold h5`}
                    data-bs-toggle="modal"
                    data-bs-target="#changeAddress"
                  >
                    Change address
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChoseAnotherAddress;