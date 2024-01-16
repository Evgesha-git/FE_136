import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './css/style.scss';

const root = document.getElementById('root');
root.append (
    new Header().init(),
    new Main().init(),
    new Footer().init()
);

console.log('MD5: 2345jk2345');