import { Route, Routes } from "react-router-dom";
import RequireAuth from "./authentication/RequireAuth";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import { privateRoutes } from "./routes/privateRoute";
import { publicRoutes } from './routes/publicRoute';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AOS from 'aos';
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import AddProduct from "./pages/Dashboard/AddProduct";
import ManageOrders from "./pages/Dashboard/ManageOrders";
import ManageUsers from "./pages/Dashboard/ManageUsers";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile";
import MyReviews from "./pages/Dashboard/MyReviews";
import RequireAdmin from "./authentication/RequireAdmin";
import ManageProducts from "./pages/Dashboard/ManageProducts";
import Payment from "./pages/Dashboard/Payment";



function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Navbar>
        <div className="mt-16">

          {/* all public routes here */}
          <Routes>
            {
              publicRoutes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)
            }

            {/* all protected routes here */}
            <Route element={<RequireAuth />}>
              {
                privateRoutes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)
              }

              {/* nested routes */}
              <Route path='/dashboard' element={<Dashboard />}>
                <Route path='my-profile' element={<MyProfile />} />
                <Route path='my-orders' element={<MyOrders />} />
                <Route path='my-reviews' element={<MyReviews />} />
                <Route path='payment/:id' element={<Payment />} />

                <Route element={<RequireAdmin />}>
                  <Route path='manage-orders' element={<ManageOrders />} />
                  <Route path='manage-users' element={<ManageUsers />} />
                  <Route path='add-product' element={<AddProduct />} />
                  <Route path='manage-products' element={<ManageProducts />} />
                </Route>
              </Route>

            </Route>


            <Route path='*' element={<NotFound />} />


          </Routes>

          <Footer />
        </div>
        <ToastContainer />
      </Navbar>

    </>
  );
}

export default App;
