import React, { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAction, useAppSelector } from "../../hooks/redux";

type THeaderProps = {
    className?: string,
}

const Header: FC<THeaderProps> = (props) => {
    const {
        className
    } = props;
	const { user, loading } = useAppSelector((state) => state.user);
	const { logOutUser, userAuth } = useAction();

    const logInHandler = () => {
        if (user) {
            logOutUser();
        } else {
            userAuth();
        }
    }

	return (
		<>
			<div
				className="header"
				style={{ display: "flex", justifyContent: "space-between" }}
			>
				<div className="logo">
					<img src="https://via.placeholder.com/80" alt="logo" />
				</div>
				<nav 
					className="nav" 
					style={{
						maxWidth: '500px', 
						width: '100%',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
				>
					<Link to={"/"}>Home</Link>
					<Link to={"todo"}>ToDo List</Link>
				</nav>
				<button onClick={logInHandler}>{user ? 'Log Out' : 'Log In'}</button>
			</div>
			<Outlet />
		</>
	);
};

export default Header;
