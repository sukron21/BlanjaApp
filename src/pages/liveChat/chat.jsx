import React, { useState } from "react";
import style from "../liveChat/chat.module.css";
import Navs from "../../components/Navs";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
	allChat,
	reset,
	selectReceiver,
	setChat,
} from "../../redux/action/chat";

const Chat = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const dataUser = useSelector((state) => state.user);
	const dataChat = useSelector((state) => state.chat);

	const user = dataUser.user;
	const receiver = dataChat.receiver;
	const listChat = dataChat.chat;

	const [socketIO, setSocketIO] = useState(null);
	const [listContact, setListContact] = useState([]);
	const [msg, setMsg] = useState("");

	const date = new Date();
	const time = date.toString().slice(5);

	useEffect(() => {
		if (user) {
			const handleSuccess = async(data) => {
				await setListContact(data.data);
			};
			dispatch(allChat(user.id_user, handleSuccess));
		}
	}, [listChat]);

	useEffect(() => {
		const socket = io(process.env.REACT_APP_BACKEND_URL);
		if(receiver.id_user){
			socket.emit("join-room", user.id_user);
		}

		socket.on("send-message-response", (res) => {
			dispatch(setChat(res));
		});

		socket.emit("contact-history", user.id_user);
		
		setSocketIO(socket);
	}, []);

	useEffect(() => {
		if (socketIO && receiver) {
			socketIO.emit("join-room", user.id_user);

			const data = {
				sender: user.id_user,
				receiver: receiver.id_user,
			};

			if (data.receiver) {
				socketIO.emit("chat-history", data);
			}
		}
	}, [receiver]);

	const select = (e) => {
		dispatch(reset());
		dispatch(selectReceiver(e.userid));
	};

	const submitText = (e) => {
		e.preventDefault();

		if(msg !== ""){
			const payload = {
				sender: user.name,
				senderid: user.id_user,
				senderimg: user.image,
				receiver: receiver.name,
				receiverid: receiver.id_user,
				receiverimg: receiver.image,
				message: msg,
				date_time: time,
			};
	
			dispatch(setChat([payload, ...listChat]));
	
			const data = {
				sender: user.id_user,
				receiver: receiver.id_user,
				message: msg,
			};
	
			socketIO.emit("send-message", data);
	
			setMsg("");
		}
	};

	return (
		<>
			<Navs />
			<div className="container">
				<div className="row ">
					<div className="col-md-4 mt-5 ">
						<div className={style.border}>
							<div
								className={`${style.chat} d-flex justify-content-center align-items-center`}>
								Chat
							</div>
							<hr />
							<div className={`${style.chatContact}`}>
								{listContact && listContact.length === 0 ? (
									<div className="text-center">No chat history</div>
								) : (
									listContact
										.sort((a, b) => (a.id < b.id ? 1 : b.id < a.id ? -1 : 0))
										.map((e, i) => (
											<div
												key={i}
												onClick={() => select(e)}
												className={`d-flex ${style.pointer} flex-row justify-content-between align-items-center py-2 px-3`}
												id="chat">
												<img
													src={`${process.env.REACT_APP_BACKEND_URL}/${e.image}`}
													className={`rounded-circle ${style.imgFit}`}
													width={50}
													height={50}
													alt=""
												/>
												<div
													className={`d-flex flex-column justify-content-between ${style.chatInfo}`}>
													<div className={`${style.chatName} mb-1`}>
														<b>{e.name}</b>
													</div>
													<div className={`${style.chatName} text-truncate`}>
														{e.sender == user.id_user && "Me: "}
														{e.message}
													</div>
												</div>
												<div className="d-flex flex-column align-items-end justify-content-between">
													<div className="mb-2">
														{e.date_time.slice(11, 16)}
													</div>
													{/* <div
														className={`${style.bgRed} ${style.chatIn} text-center text-white text-truncate`}>
														99
													</div> */}
													<div></div>
												</div>
											</div>
										))
								)}
							</div>
						</div>
					</div>
					<div className="col-md-8 mt-5">
						<div className={style.border}>
							{receiver.id_user ? (
								<div>
									<div
										className={`d-flex flex-row align-items-center py-2 px-5`}>
										<img
											className={`${style.image}`}
											src={`${process.env.REACT_APP_BACKEND_URL}/${receiver.image}`}
											height={45}
											width={45}
											alt=""
										/>
										<span className={`${style.name} mx-3`}>
											{receiver.name}
										</span>
									</div>
									<hr className="my-1" />
									<div
										className={`${style.chatMessage} px-2 d-flex flex-column-reverse`}>
										{listChat.map((e, i) => (
											<div key={i}>
												{e.senderid === user.id_user ? (
													<div className="d-flex align-items-end">
														<img
															className="rounded-circle"
															src={`${process.env.REACT_APP_BACKEND_URL}/${e.senderimg}`}
															width={40}
															height={40}
															alt=""
														/>
														<div
															className={`${style.chatSender} bg-danger text-white text-break`}>
															{e.message}
														</div>
														<div className="pb-1" id={style.chatTime}>
															{e.date_time.slice(11, 16)}
														</div>
													</div>
												) : (
													<div className="d-flex justify-content-end align-items-end">
														<div className="pb-1" id={style.chatTime}>
															{e.date_time.slice(11, 16)}
														</div>
														<div className={`${style.chatReceiver} text-break`}>
															{e.message}
														</div>
														<img
															className="rounded-circle"
															src={`${process.env.REACT_APP_BACKEND_URL}/${e.senderimg}`}
															width={40}
															height={40}
															alt=""
														/>
													</div>
												)}
											</div>
										))}
									</div>
									<form onSubmit={(e) => submitText(e)}>
										<div
											className={`px-5 d-flex flex-row align-items-center bg-light ${style.msgBox}`}>
											<div
												className={`w-100 ${style.sendMessage} d-flex justify-content-between align-items-center`}>
												<input
													onChange={(e) => setMsg(e.target.value)}
													type={"text"}
													placeholder="Type your message..."
													className={`p-3`}
													id={style.sendMessage}
													value={msg}
												/>
											</div>
										</div>
									</form>
								</div>
							) : (
								<div className="d-flex justify-content-center align-items-center h-100">
									Start chatting
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Chat;
