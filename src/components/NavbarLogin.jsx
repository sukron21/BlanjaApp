import React, { Fragment, useState } from 'react';
import logo from '../assets/images/blanja_icon.png';
import filter from '../assets/images/filter.png';
import notif from '../assets/images/notif.png';
import mail from '../assets/images/mail.png';
import card from '../assets/images/cart.png';
import style from '../assets/style/style.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const NavbarLogin = () => {
  const location = useLocation();
  const [color, setColor] = useState("black");
  const [size, setSize] = useState(true);
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  const [search, setSearch] = useState('');

  const onLogout = () => {
    localStorage.clear();
    return navigate("/login");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    localStorage.setItem('name', JSON.stringify(search));
    if(location.pathname === '/category'){
      window.location.reload();
    }else{
      return navigate('/category');
    }
  };

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg bg-light row">
        <div className="container-fluid col-md-10 col-11">
          <Link to="/" className={`${style.links}`}>
            <div className="d-flex col-md-2 align-items-center">
              <img src={logo} alt="" className="me-2" />
              <h3 className={`fontBold text-danger my-auto`}>Blanja</h3>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            ariacontrols="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`me-auto mb-2 mb-lg-0 mt-md-0 mt-2 col-md-6 col-12`}>
              <form className={`d-flex`} role="search" onSubmit={onSubmitHandler}>
                <input
                  className={`me-2 form-control col-md-10 ${style.navSearch}`}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img src={filter} alt="" />
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Filter
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="my-3">
                          <p className="fontBold">Color</p>
                          <div className="d-flex flex-row">
                            <div
                              onClick={() => {
                                setColor("black");
                              }}
                            >
                              {color === "black" ? (
                                <div className={`me-2 ${style.colorActive}`}>
                                  <div
                                    className={`mx-auto ${style.blackActive}`}
                                  ></div>
                                </div>
                              ) : (
                                <div className={`me-2 ${style.black}`}></div>
                              )}
                            </div>
                            <div onClick={() => setColor("red")}>
                              {color === "red" ? (
                                <div className={`me-2 ${style.colorActive}`}>
                                  <div
                                    className={`mx-auto ${style.redActive}`}
                                  ></div>
                                </div>
                              ) : (
                                <div className={`me-2 ${style.red}`}></div>
                              )}
                            </div>
                            <div onClick={() => setColor("blue")}>
                              {color === "blue" ? (
                                <div className={`me-2 ${style.colorActive}`}>
                                  <div
                                    className={`mx-auto ${style.blueActive}`}
                                  ></div>
                                </div>
                              ) : (
                                <div className={`me-2 ${style.blue}`}></div>
                              )}
                            </div>
                            <div onClick={() => setColor("green")}>
                              {color === "green" ? (
                                <div className={`me-2 ${style.colorActive}`}>
                                  <div
                                    className={`mx-auto ${style.greenActive}`}
                                  ></div>
                                </div>
                              ) : (
                                <div className={`me-2 ${style.green}`}></div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="my-3">
                          <p className="fontBold">Size</p>
                          <div className="d-flex flex-row">
                            <div className="btn btn-light btn-outline-dark me-2">XS</div>
                            <div className="btn btn-light btn-outline-dark me-2">S</div>
                            <div className="btn btn-light btn-outline-dark me-2">M</div>
                            <div className="btn btn-light btn-outline-dark me-2">L</div>
                            <div className="btn btn-light btn-outline-dark me-2">XL</div>
                          </div>
                        </div>
                        <div className="my-3">
                          <p className="fontBold">Category</p>
                          <div className="d-flex flex-row">
                            <div className="btn btn-light btn-outline-dark me-2">T-Shirt</div>
                            <div className="btn btn-light btn-outline-dark me-2">Short</div>
                            <div className="btn btn-light btn-outline-dark me-2">Jacket</div>
                            <div className="btn btn-light btn-outline-dark me-2">Pants</div>
                            <div className="btn btn-light btn-outline-dark me-2">Shoes</div>
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
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </ul>
            <div className={`row col-md-5 col-12 d-flex flex-row-reverse`}>
              <div className="col-md-6 col-12 mb-2 w-100 d-flex justify-content-end gap-2">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    style={{ marginTop: "13px", marginLeft: "5px" }}
                    src={card}
                    alt=""
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <Link>
                    <img
                      style={{ marginTop: "13px", marginLeft: "20px" }}
                      src={notif}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    style={{ marginTop: "13px", marginLeft: "20px" }}
                    src={mail}
                    alt=""
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <Link to="/profile">
                    <img
                      style={{
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px",
                        marginTop: "13px",
                        marginLeft: "20px",
                      }}
                      src={`${process.env.REACT_APP_BACKEND_URL}/${user.image}`}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="button mt-2 ms-3">
                  <button
                    className=""
                    style={{
                      width: "max-content",
                      height: "max-content",
                      border: "2px solid #D4D4D4 ",
                      borderRadius:"15px"
                    }}
                    onClick={() => {
                      Swal.fire({
                        title: 'Are you sure to logout?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes',
                        cancelButtonText: 'No'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire({
                            icon: 'success',
                            title: 'Logged Out!',
                            showConfirmButton: false,
                            timer: 1800,
                          });
                          onLogout();
                        }
                      })
                    }}
                  >
                    <p className="fontRegular">logout</p>
                    <i className="bi bi-box-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavbarLogin;
