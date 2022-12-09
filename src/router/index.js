import React from "react";
import {
	BrowserRouter,
	Navigate,
	Outlet,
	Route,
	Routes,
} from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

import Login from "../pages/login/login";
import Profile from "../pages/user/profile/Profile";
import Register from "../pages/register/register";
import MyBag from "../pages/myBag/myBag";
import Category from "../pages/category/category";
import Product from "../pages/product/product";
import CheckOut from "../pages/user/checkout/CheckOut";
import Chat from "../pages/liveChat/chat";
import Landing from "../pages/landing/landing";
import ResetPass from "../pages/ResetPassword/index";
import LoginAdmin from "../pages/admin/login/adminLogin";
import HomeAdmin from "../pages/admin/home/adminHome";
import Order from "../pages/admin/order/order";
import AdminProduct from "../pages/admin/product/product";
import ProductEdit from "../pages/productEdit/ProductEdit";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2';

const AdminRoute = () => {
	const level = localStorage.getItem("level");

	if (level == 0) {
		return <Outlet />;
	} else {
		alert("You have no access to this site");
		return <Navigate to="/admin" />;
	}
};

const PrivateRoute = () => {
	const user = useSelector((state) => state.user.user)

	if(user.user_type === 1 || user.user_type === 2){
		return <Outlet />;
	} else {
		Swal.fire({
			icon: 'error',
			title: 'You need to login first!',
			showConfirmButton: false,
			timer: 1800,
		  });
		return <Navigate to="/login" />;
	}
}

export default function Router() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/">
					<Route index element={<Landing />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="resetpass" element={<ResetPass />} />
					<Route path="product/:id_product" element={<PrivateRoute />}>
						<Route index element={<Product />} />
					</Route>
					<Route path="checkout" element={<PrivateRoute />}>
						<Route index element={<CheckOut />} />
					</Route>
					<Route path="profile" element={<PrivateRoute />}>
						<Route index element={<Profile />} />
					</Route>
					<Route path="mybag" element={<PrivateRoute />}>
						<Route index element={<MyBag />} />
					</Route>
					<Route path="category" element={<PrivateRoute />}>
						<Route index element={<Category />} />
					</Route>
					<Route path="chat" element={<PrivateRoute />}>
						<Route index element={<Chat />} />
					</Route>
					<Route path="edit-product/:id" element={<PrivateRoute />}>
						<Route index element={<ProductEdit />} />
					</Route>
				</Route>
				<Route path="/admin/">
					<Route index element={<LoginAdmin />} />
					<Route path="home" element={<AdminRoute />}>
						<Route index element={<HomeAdmin />} />
					</Route>
					<Route path="order" element={<AdminRoute />}>
						<Route index element={<Order />} />
					</Route>
					<Route path="product" element={<AdminRoute />}>
						<Route index element={<AdminProduct />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
