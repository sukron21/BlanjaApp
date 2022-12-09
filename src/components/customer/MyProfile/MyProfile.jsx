import './style.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCustomer, updateImageUser } from '../../../redux/action/user';
import strtotime from 'locutus/php/datetime/strtotime';
import date from 'locutus/php/datetime/date';
import Swal from 'sweetalert2';

const MyProfile = () => {
  // get date picker
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }
  today = yyyy + '-' + mm + '-' + dd;

  // logic page
  const [image, setImage] = useState();
  const dispatch = useDispatch();
  let bool = null;

  const { user, isLoading, isError } = useSelector((state) => state.user);

  // form handle update
  const [form, setForm] = useState({
    name: null,
    email: null,
    phone: null,
    gender: null,
    birth_date: null,
  });

  // toggle check gender
  const toggleCheckedMale = () => {
    bool = true;
    if (bool === true) {
      setForm({ ...form, gender: 0 });
    } else if (bool === false) {
      setForm({ ...form, gender: 1 });
    } else {
      setForm({ ...form, gender: null });
    }
  };

  const toggleCheckedFemale = () => {
    bool = false;
    if (bool === true) {
      setForm({ ...form, gender: 0 });
    } else if (bool === false) {
      setForm({ ...form, gender: 1 });
    } else {
      setForm({ ...form, gender: null });
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
    if (image) {
      setForm({ ...form, image: image });
      const id = user.id_user;
      const body = {
        image: image,
      };
      const handleSuccess = (data) => {
        console.log('image', data);
      };
      dispatch(updateImageUser(id, body, handleSuccess));
    }

    const handleSuccess = async(data) => {
      await Swal.fire({
        icon: 'success',
        title: 'Profile Updated!',
        showConfirmButton: false,
        timer: 1800,
      })
    };
    const id = user.id_user;

    const body = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      gender: form.gender,
      birth_date: form.birth_date || user.birth_date,
    };
    dispatch(updateCustomer(id, body, handleSuccess));
  };

  return (
    <>
      {isLoading ? (
        <>Loading...</>
      ) : isError ? (
        <>Error</>
      ) : (
        <div className="w-90 m-3 mt-5">
          <div className="wrapper m-4">
            <div className="title mb-3">
              <p className="fontBold h4">My Profile</p>
            </div>
            <div className="desc mb-3">
              <p className="fontMedium h6 text-muted">Manage your profile information</p>
            </div>
            <div className="break-line mb-5"></div>

            <div className="form-wrapper mx-5">
              <form onSubmit={(e) => onSubmitHandler(e)}>
                <div className="wrapper-form-image row">
                  <div className="wrapper-side-form-input col-8 col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                    <div className="mb-3 row">
                      <label htmlFor="name" className="col-4 col-form-label d-flex ">
                        <p className="fontMedium h6 text-muted">Name</p>
                      </label>
                      <div className="col-8">
                        <input type="text" className="form-control" id="name" name="name" defaultValue={user.name} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="email" className="col-4 col-form-label d-flex ">
                        <p className="fontMedium h6 text-muted">Email</p>
                      </label>
                      <div className="col-8">
                        <input type="text" className="form-control" id="email" name="email" defaultValue={user.email} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="phone" className="col-4 col-form-label d-flex ">
                        <p className="fontMedium h6 text-muted">Phone number</p>
                      </label>
                      <div className="col-8">
                        <input type="phone" className="form-control" id="phone" name="phone" defaultValue={user.phone} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="phone" className="col-4 col-form-label d-flex ">
                        <p className="fontMedium h6 text-muted">
                          Gender{' '}
                          {user.gender === 0 ? (
                            <span className="font-weight-bold" style={{ borderBottom: '2px solid black' }}>
                              laki-laki
                            </span>
                          ) : (
                            <span className="font-weight-bold" style={{ borderBottom: '2px solid black' }}>
                              perempuan
                            </span>
                          )}
                        </p>
                        <br />
                      </label>

                      <div className="col-8 d-flex gap-3">
                        <div className="radio-1 d-flex flex-row gap-2">
                          <div className="input-radio">
                            <input className="form-check-input" type="radio" name="gender" id="laki-laki" onClick={toggleCheckedMale} />
                          </div>
                          <div className="label-radio">
                            <label className="form-check-label" htmlFor="laki-laki">
                              Laki-laki
                            </label>
                          </div>
                        </div>
                        <div className="radio-2 d-flex flex-row gap-2">
                          <div className="input-radio">
                            <input className="form-check-input" type="radio" name="gender" id="perempuan" onClick={toggleCheckedFemale} />
                          </div>
                          <div className="label-radio">
                            <label className="form-check-label" htmlFor="perempuan">
                              Perempuan
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 row additional-desc">
                      <p className="fontBold fst-italic" style={{ color: '#F01F0E ' }}>
                        double click to make sure changes
                      </p>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="phone" className="col-4 col-form-label d-flex ">
                        <p className="fontMedium h6 text-muted">Date of birth</p>
                        <br />
                        <p className="fontMedium h6 text-bold">{user.birth_date ? <>({date('Y-m-d', strtotime(user.birth_date))})</> : <></>}</p>
                      </label>
                      <div className="col-8 d-flex gap-3">
                        <input type="date" name="birth_date" className="form-control" id="birth_date" onChange={handleChange} />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="-" className="col-4 col-form-label d-flex "></label>
                      <div className="col-8 d-flex gap-3">
                        <button type="submit" className="button-submit-profile fontMedium bgRedPucat h6 textWhiteBening button-submit-responsive">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* end of form aside left */}

                  {/* form aside right */}
                  <div className="wrapper-side-form-image col-4 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 d-flex flex-column">
                    <div className="img-form  d-flex justify-content-center align-users-center mb-3">
                      <img
                        src={`${process.env.REACT_APP_BACKEND_URL}/${user.image}`}
                        alt="photo-user"
                        style={{
                          width: '100px',
                          heith: '100px',
                          borderRadius: '50%',
                        }}
                      />
                    </div>
                    <div className="desc-form-img mb-3">
                      <label
                        className="fontMedium text-muted text-center"
                        style={{
                          border: '2px solid #9B9B9B',
                          borderRadius: '25px',
                          width: '100%',
                        }}
                        htmlFor="photo"
                      >
                        select Image
                      </label>
                    </div>
                    <div>
                      <input
                        type="file"
                        name="photo"
                        id="photo"
                        onChange={(e) => {
                          setImage(e.target.files[0]);
                        }}
                      />
                    </div>
                  </div>
                  {/* end of form aside right */}
                </div>
                <div className="mb-3 mt-3 row">
                  <div className="col-12 d-flex justify-content-center gap-3">
                    <button type="submit" className="button-submit-profile fontMedium bgRedPucat h6 textWhiteBening button-submit-responsive-2">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyProfile;
