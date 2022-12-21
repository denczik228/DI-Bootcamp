import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Routes
} from "react-router-dom";

import { useState, createContext } from 'react';

import Register from "./Pages/register/Register";
import Login from "./Pages/login/Login";
import Home from "./Pages/home/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { Auth } from "./components/Auth";

export const AppContext = createContext(null);

function App() {

  const [token, setToken] = useState('')

  // const Layout = () => {
  //   return (
  //     <>
  //       <Navbar />
  //       <Outlet />
  //       <Footer />
  //     </>
  //   )
  // }

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: '/',
  //         element: <Home />
  //       }
  //     ]
  //   },
  //   {
  //     path: "/register",
  //     element: <AppContext.Provider value={{ token, setToken }}><Register /></AppContext.Provider>,
  //   },
  //   {
  //     path: "/login",
  //     element: <AppContext.Provider value={{ token, setToken }}><Login /></AppContext.Provider>,
  //   },
  //   {
  //     path: "/budget",
  //     element: <AppContext.Provider value={{ token, setToken }}><Auth /></AppContext.Provider>
  //   }
  // ]);


  return (
    <>
      <div className="app">
        <div className="container">
          {/* <AppContext.Provider value={{ token, setToken }}> */}
          {/* <RouterProvider router={router} /> */}
          {/* </AppContext.Provider> */}
        </div>
        <AppContext.Provider value={{ token, setToken }}>
          <Routes>
            <Route path ='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/budget' element={<Auth />} />
          </Routes>
        </AppContext.Provider>
      </div>
    </>
  )
}

export default App