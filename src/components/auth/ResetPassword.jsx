import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../../assets/style/style.module.css";
import { useDispatch } from "react-redux";
import { checkEmail } from "../../redux/action/user";
import Swal from 'sweetalert2';

const ResetPassword = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
      email: ""
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const handleSuccess = (data) => {
      if(data.data.data.length === 0){
        Swal.fire({
          icon: 'error',
          title: 'Email is not registered',
          showConfirmButton: false,
          timer: 1800,
        });
      }else{
        localStorage.setItem("em",JSON.stringify(data.data.data));
        window.location.reload();
      }
    }
    dispatch(checkEmail(form.email, handleSuccess))
  };

  return (
    <Fragment>
      <form className="col-12 col-md-8" onSubmit={(e) => onSubmit(e)} >
        <div className="mb-3">
          <input
            type="email"
            className={`form-control ${style.buttons}`}
            id="emailInput"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <button type="submit" className={`col-12 mb-3 ${style.buttonsActive}`}>
          Reset Password
        </button>
      </form>
      <div className="text-center">
        <p>
          Don't have a Blanja account?{" "}
          <span>
            <Link className={`${style.links} text-danger`} to="/register"> Register</Link>
          </span>
        </p>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
