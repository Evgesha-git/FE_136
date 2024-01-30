import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Product from './pages/Product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <h2>Oooops</h2>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/catalog',
        element: <Catalog />,
      },
      {
        path: '/products/:prodId',
        element: <Product />
      }
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
