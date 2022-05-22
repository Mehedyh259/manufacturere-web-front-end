import AddProduct from "../pages/Dashboard/AddProduct";
import ManageOrders from "../pages/Dashboard/ManageOrders";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import MyOrders from "../pages/Dashboard/MyOrders";
import MyProfile from "../pages/Dashboard/MyProfile";
import MyReviews from "../pages/Dashboard/MyReviews";



export const nestedRoutes = [
    { path: 'my-profile', Component: MyProfile },
    { path: 'my-orders', Component: MyOrders },
    { path: 'my-reviews', Component: MyReviews },
    { path: 'manage-orders', Component: ManageOrders },
    { path: 'manage-users', Component: ManageUsers },
    { path: 'add-product', Component: AddProduct },
]