import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../redux/action/user";

const LoginAdmin = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const onSubmit = (e) => {
		e.preventDefault();

		const handleSuccess = (data) => {
			if (data.data.status !== "success") {
				alert(data.data.message);
			} else {
				const user = data.data.data.user_type;

				if (user === 0) {
					localStorage.setItem("token", data.data.token);
					localStorage.setItem("level", user);
					alert("Login Success");
					return navigate("/admin/home");
				} else {
					alert("Silahkan login menggunakan akun admin");
				}
			}
		};
		dispatch(login(form, handleSuccess));
	};

	return (
		<div className="container-fluid row">
			<div className="text-center mb-3">
				<h1>
					Welcome to admin page
					<br />
					Blanja Application
				</h1>
				<p>Please Log In to continue</p>
			</div>
			<div className="d-flex justify-content-center align-items-center">
				<div className="card">
					<div className="card-body">
						{/* <form> */}
						<form onSubmit={(e) => onSubmit(e)}>
							{/* <form> */}
							<div className="form-group mb-3">
								<label htmlFor="username"></label>
								<input
									type="text"
									placeholder="Username or Email"
									className="form-control"
									onChange={(e) => setForm({ ...form, email: e.target.value })}
								/>
							</div>

							<div className="form-group mb-3">
								<label htmlFor="password"></label>
								<input
									type="password"
									placeholder="Password"
									className="form-control"
									onChange={(e) =>
										setForm({ ...form, password: e.target.value })
									}
								/>
							</div>
							<button type="submit" className="btn btn-primary">
								Log In
							</button>
						</form>
						<div className="text-center">
							<Link>Forgot Password</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginAdmin;
