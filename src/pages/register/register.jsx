import React, { Fragment } from 'react';
import { useState } from 'react';
import logo from '../../assets/images/blanja_icon.png';
import style from './style.module.css';
import CustomerRegister from '../../components/auth/CustomerRegister';
import SellerRegister from '../../components/auth/SellerRegister';

const Register = () => {
  const [active, setActive] = useState(1);

  return (
    <Fragment>
      <div className="container-fluid row">
        <div className={`col-md-8 col-10 position-absolute start-50 translate-middle-x ${style.contents}`}>
          <div className="text-center">
            <div className="d-flex justify-content-center">
              <img src={logo} alt="" className="me-2" />
              <h3 className={`fontBold text-danger my-auto`}>Blanja</h3>
            </div>
            <div className="py-4">
              <h4 className="fontBold">Please login with your account</h4>
            </div>
            <div className="d-flex justify-content-center row">
              <button className={active === 1 ? `col-md-2 col-5 ${style.buttonsActive}` : `col-md-2 col-5 ${style.buttons}`} onClick={() => setActive(1)}>
                Customer
              </button>
              <button className={active === 2 ? `col-md-2 col-5 ${style.buttonsActive}` : `col-md-2 col-5 ${style.buttons}`} onClick={() => setActive(2)}>
                Seller
              </button>
            </div>
            {active === 1 ? (
              <div className="d-flex justify-content-center row my-4">
                <CustomerRegister />
              </div>
            ) : (
              <div className="d-flex justify-content-center row my-4">
                <SellerRegister />
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
