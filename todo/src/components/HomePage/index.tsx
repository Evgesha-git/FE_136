import React, { FC } from "react";
import { useAppSelector } from "../../hooks/redux";

const HomePage: FC = () => {
	const { user } = useAppSelector((state) => state.user);

	return (
		<section className="home">
			<div className="container">
                {!user && <h2>Добро пожаловать, авторизуйтесь или зарегистрируйтесь!</h2>}
                {user && 
                    <div className="userInfo">
                        <h2>Добро пожаловать {user.displayName}!</h2>
                    </div>
                }
            </div>
		</section>
	);
};

export default HomePage;
