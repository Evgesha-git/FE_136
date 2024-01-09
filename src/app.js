import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

const root = document.getElementById('root');
root.append (
    new Header().init(),
    new Main().init(),
    new Footer().init()
);