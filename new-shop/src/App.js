import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Product from './pages/Product';
import { createContext, useEffect, useState } from 'react';
import Card from './pages/Card';
import axios from 'axios';

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
      },
      {
        path: '/card',
        element: <Card className={'bg-red'} />
      }
    ]
  },
]);

export const CardContext = createContext()

function App() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    console.log(card);
    (async () => {
      const resp = await axios.get('https://tic-tac-toe-fbcbf-default-rtdb.europe-west1.firebasedatabase.app/users.json');
      console.log(resp.data);
    })();
  });

  return (
    <div className="App">
      <CardContext.Provider value={{ card, setCard }}>
        <RouterProvider router={router} />
      </CardContext.Provider>
    </div>
  );
}

export default App;
