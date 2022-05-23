import AllProducts from "../pages/AllProducts"
import Blogs from "../pages/Blogs"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Register from "../pages/Login/Register"
import Portfolio from "../pages/Portfolio"


export const publicRoutes = [
    { path: '/', Component: Home },
    { path: '/blogs', Component: Blogs },
    { path: '/portfolio', Component: Portfolio },
    { path: '/all-products', Component: AllProducts },
    { path: '/login', Component: Login },
    { path: '/register', Component: Register },
]