import React, { useState, useEffect } from "react";
import "./style.css";
import MainContentCust from "../../../components/customer/MainContent/MainContentCust";
import MainContentSeller from "../../../components/seller/MainContent/MainContentSeller";
import Navs from "../../../components/Navs";
import { getByMainAddress } from "../../../redux/action/address";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const [userType, setUserType] = useState(null);
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setUserType(user.user.user_type)
    const main_address = user.user.main_address;
    if(main_address) {
      dispatch(getByMainAddress(main_address))
    }
  }, []);

  return (
    <div className="vw-100 vh-100">
			<Navs />
      <div className="container-profile h-100 w-100">
        {userType == 1 ? <MainContentCust /> : <></>}
        {userType == 2 ? <MainContentSeller /> : <></>}
      </div>
    </div>
  );
};

export default Profile;