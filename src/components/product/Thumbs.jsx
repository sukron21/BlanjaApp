import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import thumbs1 from "../../assets/images/bajuMuslim1.png";
import style from "../../assets/style/style.module.css";

const Thumbs = () => {
	const [details, setDetails] = useState({});
	const { id_product } = useParams();
	console.log(details[0]);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/product/${id_product}`)
			.then((response) => {
				console.log(response);
				setDetails(response.data.data.rows);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id_product]);

	return (
		<Fragment>
			<div className="container-fluid row">
				<div className={`flex-row d-flex col-12 ${style.margins}`}>
					<div className={`${style.mobiles}`}>
						{details[0].map((item, index) => (
							<div key={index}>
								<img
									src={`${process.env.REACT_APP_BACKEND_URL}/${item.photo}`}
									alt=""
									className={`col-md-6 col-10 pe-1 mb-2 ${style.thumbs} ${style.thumbnails}`}
								/>
							</div>
						))}
						<img
							src={thumbs1}
							alt=""
							className={`col-md-6 col-10 pe-1 mb-2 ${style.thumbs} ${style.thumbnails}`}
						/>
						<img
							src={thumbs1}
							alt=""
							className={`col-md-6 col-10 pe-2 mb-2 ${style.thumbs} ${style.thumbnails}`}
						/>
						<img
							src={thumbs1}
							alt=""
							className={`col-md-6 col-10 pe-2 mb-2 ${style.thumbs} ${style.thumbnails}`}
						/>
						<img
							src={thumbs1}
							alt=""
							className={`col-md-6 col-10 pe-2 mb-2 ${style.thumbs} ${style.thumbnails}`}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Thumbs;
