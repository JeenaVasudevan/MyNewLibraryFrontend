import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root';
import ErrorPage from './error-page';
import Home , { loader as homeLoader }from './routes/home';
import Movies from './routes/movies';
import Movie,{loader as movieLoader} from './routes/movie';
import Person from './routes/person';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:'/',
        element:<Home />,
        loader:homeLoader,
      },
      {
        path:'/movies',
        element:<Movies />,
      },
      {
        path:'/movies/:movieId',
        element:<Movie />,
        loader:movieLoader,
      },
      {
        path:'/person/:personId',
        element:<Person />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
