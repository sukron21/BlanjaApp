import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import logo from "../../assets/images/blanja_icon.png";
import style from "./style.module.css";
import ResetPassword from "../../components/auth/ResetPassword";
import ConfirmResetPass from "../../components/auth/KonfirmasiResetPass";

const ResetPass = () => {
	const [active, setActive] = useState(false);
	
    useEffect(() => {
        const email = JSON.parse(localStorage.getItem("em"));
        setActive(email)
    }, [])

	return (
		<Fragment>
			<div className="container-fluid row">
				<div
					className={`col-md-8 col-10 position-absolute start-50 translate-middle-x ${style.contents}`}>
					<div className="text-center">
						<div className="d-flex justify-content-center">
							<img src={logo} alt="" className="me-2" />
							<h3 className={`fontBold text-danger my-auto`}>Blanja</h3>
						</div>
						<div className="py-4">
							<h4 className="fontBold">Reset Password</h4>
						</div>
						{active ? (
                            <div className="d-flex justify-content-center row my-4">
								<ConfirmResetPass />
							</div>
						) : (
							<div className="d-flex justify-content-center row my-4">
								<ResetPassword />
							</div>
						)}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default ResetPass;
