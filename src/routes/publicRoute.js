import Blogs from "../pages/Blogs"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Register from "../pages/Login/Register"



export const publicRoutes = [
    { path: '/', Component: Home },
    { path: '/blogs', Component: Blogs },
    { path: '/login', Component: Login },
    { path: '/register', Component: Register },
]