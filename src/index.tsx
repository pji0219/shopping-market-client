import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import NotFound from './common/components/NotFound';
import Home from './home/page/Home';
import Electronics from './electronicProducts/page/Electronics';
import Clothes from './clothes/page/Clothes';
import store from './store';
import SearchProducts from './search/page/SearchProducts';
import ProductDetail from './productDetail/page/ProductDetail';
import Cart from './cart/page/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/electronics', element: <Electronics /> },
      { path: '/clothes', element: <Clothes /> },
      { path: '/search', element: <SearchProducts /> },
      { path: '/product/:id', element: <ProductDetail /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
