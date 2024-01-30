import React from "react";
import { Link, Outlet } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
    return (
        <>
            <header className={style.header}>
                <div className={style.logo}>
                    <Link to={"/"}>
                        <img src="https://via.placeholder.com/50" alt="logo" />
                    </Link>
                </div>
                <nav className={style.nav}>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/catalog"}>Catalog</Link>
                        </li>
                        <li>
                            <Link to={"/about"}>About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    );
};

export default Header;
