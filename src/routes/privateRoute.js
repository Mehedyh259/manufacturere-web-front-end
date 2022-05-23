
import Dashboard from "../pages/Dashboard/Dashboard";
import Purchase from "../pages/Purchase";


export const privateRoutes = [
    { path: '/dashboard', Component: Dashboard },
    { path: '/purchase/:id', Component: Purchase },

]