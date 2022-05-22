import { Route, Routes } from "react-router-dom";
import RequireAuth from "./authentication/RequireAuth";
import Navbar from "./components/Navbar";
import { privateRoutes } from "./routes/privateRoute";
import { publicRoutes } from './routes/publicRoute'

function App() {
  return (
    <>
      <Navbar>
        <div className="mt-16">
          <Routes>
            {
              publicRoutes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)
            }
            <Route element={<RequireAuth />}>
              {
                privateRoutes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)
              }
            </Route>

          </Routes>
        </div>
      </Navbar>
    </>
  );
}

export default App;
