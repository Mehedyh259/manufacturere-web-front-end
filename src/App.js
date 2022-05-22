import { Route, Routes } from "react-router-dom";
import RequireAuth from "./authentication/RequireAuth";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import { nestedRoutes } from "./routes/nestedRoute";
import { privateRoutes } from "./routes/privateRoute";
import { publicRoutes } from './routes/publicRoute';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AOS from 'aos';


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
            </Route>

            {/* all nested routes here */}
            <Route path='/dashboard' element={<Dashboard />}>
              {
                nestedRoutes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)
              }
            </Route>


          </Routes>
        </div>
        <ToastContainer />
      </Navbar>

    </>
  );
}

export default App;
