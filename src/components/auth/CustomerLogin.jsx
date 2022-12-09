import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import style from '../../assets/style/style.module.css';
import { login } from '../../redux/action/user';
import { reset } from '../../redux/action/chat';
import Swal from 'sweetalert2';

const CustomerLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const handleSuccess = (data) => {
      if (data.data.status !== 'success') {
        Swal.fire({
          icon: 'error',
          title: 'Name or Password is incorrect',
          showConfirmButton: false,
          timer: 1800,
        });
      } else {
        const user = data.data.data.user_type;
        if (user === 1) {
          localStorage.setItem('token', data.data.token);
          Swal.fire({
            icon: 'success',
            title: 'Login Success!',
            showConfirmButton: false,
            timer: 1800,
          });

          dispatch(reset());
          return navigate('/');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'This user is not registered as a customer',
            showConfirmButton: false,
            timer: 1800,
          });
        }
      }
    };
    dispatch(login(form, handleSuccess));
  };

  return (
    <Fragment>
      <form className="col-12 col-md-8" onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <input type="email" className={`form-control ${style.buttons}`} id="emailInput" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        </div>
        <div className="mb-3">
          <input type="password" className={`form-control ${style.buttons}`} id="passwordInput" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        </div>
        <div className="d-flex flex-row-reverse mb-3">
          <Link className={`${style.links}`} to="/resetpass">
            <p className="text-danger">Forget Password?</p>
          </Link>
        </div>
        <button type="submit" className={`col-12 mb-3 ${style.buttonsActive}`}>
          Log in
        </button>
      </form>
      <div className="text-center">
        <p>
          Don't have a Blanja account?{' '}
          <span>
            <Link className={`${style.links} text-danger`} to="/register">
              {' '}
              Register
            </Link>
          </span>
        </p>
      </div>
    </Fragment>
  );
};

export default CustomerLogin;
