import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../../assets/style/style.module.css";
import { useDispatch } from "react-redux";
import { updateEmail } from "../../redux/action/user";
import Swal from 'sweetalert2';

const ConfirmResetPass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [update, setUpdate] = useState({
    password:"",
    newPassword:""
  });

  const handlePost = (e) => {
    e.preventDefault();

    if(update.password.length >= 6 || update.newPassword >= 6){
      if(update.password===update.newPassword){
        const user = JSON.parse(localStorage.getItem("em"));
        const id = user[0].id_user;
        const type = user[0].user_type === 1 ? "customer" : "seller";

        const form = {
          password: update.password
        };

        const handleSuccess = (data) => {
          Swal.fire({
            icon: 'success',
            title: 'Change Password Success',
            showConfirmButton: false,
            timer: 1800,
          });
          
          return navigate("/login");
        }
        dispatch(updateEmail(id, type, form, handleSuccess))
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Password is not match',
          showConfirmButton: false,
          timer: 1800,
        });
      }
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Password must be more than 6 characters',
        showConfirmButton: false,
        timer: 1800,
      });
    }
  };
  
  return (
    <Fragment>
      <form className="col-12 col-md-8" onSubmit={(e) => handlePost(e)} >
        <div className="mb-3">
          <input
            type="password"
            className={`form-control ${style.buttons}`}
            id="passwordInput"
            placeholder="Password"
            onChange={(e) =>setUpdate({ ...update, password: e.target.value })}
            required
          />
          
        </div>
        <div className="mb-3">
        <input
            type="password"
            className={`form-control ${style.buttons}`}
            id="confirmpasswordInput"
            placeholder="Confirmation New Password"
            onChange={(e) =>setUpdate({ ...update, newPassword: e.target.value })}
            required
          />
        </div>
        <button type="submit" className={`col-12 mb-3 ${style.buttonsActive}`}>
          Reset Password
        </button>
      </form>
    </Fragment>
  );
};

export default ConfirmResetPass;
