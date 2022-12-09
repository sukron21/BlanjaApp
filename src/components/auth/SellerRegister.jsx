import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from '../../assets/style/style.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/action/user';
import Swal from 'sweetalert2';

const SellerRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    store_desc: '',
    user_type: 2,
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(form);
    if (form.name === '' || form.password === '') {
      Swal.fire({
        icon: 'error',
        title: 'Input field must be filled',
        showConfirmButton: false,
        timer: 1800,
      });
    } else if (form.password.length <= 6) {
      Swal.fire({
        icon: 'error',
        title: 'Password must be more than 6 characters',
        showConfirmButton: false,
        timer: 1800,
      });
    } else {
      const body = {
        name: form.name,
        email: form.email,
        password: form.password,
        phone: form.phone,
        store_desc: form.store_desc,
        user_type: form.user_type,
      };

      const handleSuccess = (data) => {
        if (data.data.status !== 'success') {
          Swal.fire({
            icon: 'error',
            title: 'Email is already taken!',
            showConfirmButton: false,
            timer: 1800,
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Register Success!',
            showConfirmButton: false,
            timer: 1800,
          });

          navigate('/login');
        }
      };
      dispatch(register(body, handleSuccess));
    }
  };

  return (
    <Fragment>
      <form className="col-12 col-md-8" onSubmit={(e) => onSubmitHandler(e)}>
        <div className="mb-3">
          <input type="text" className={`form-control ${style.buttons}`} id="nameInput" placeholder="Store name" onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        </div>
        <div className="mb-3">
          <input type="email" className={`form-control ${style.buttons}`} id="emailInput" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        </div>
        <div className="mb-3">
          <input type="text" className={`form-control ${style.buttons}`} id="phoneInput" placeholder="Phone number" onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
        </div>
        <div className="mb-3">
          <input type="text" className={`form-control ${style.buttons}`} id="descInput" placeholder="Store description" onChange={(e) => setForm({ ...form, store_desc: e.target.value })} required />
        </div>
        <div className="mb-3">
          <input type="password" className={`form-control ${style.buttons}`} id="passwordInput" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        </div>
        <button type="submit" className={`col-12 mb-3 mt-4 ${style.buttonsActive}`}>
          Register
        </button>
      </form>
      <div className="text-center">
        <p>
          Already have a Blanja account?{' '}
          <span>
            <Link className={`${style.links} text-danger`} to="/login">
              {' '}
              Log in
            </Link>
          </span>
        </p>
      </div>
    </Fragment>
  );
};

export default SellerRegister;
