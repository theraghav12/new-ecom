import AuthRegister from "./pages/auth/register"
import AuthLogin from "./pages/auth/login"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import AuthLayout from "./components/auth/layout";
import AdminDashboard from "./pages/admin-view/dasboard";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/order";
import AdminFeatures from "./pages/admin-view/features";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingAccount from "./pages/shopping-view/account";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-page";

function App() {

  const isAuthenticated= false;
  const user=null;

  return (
    <div className="flex flex-col overflow-hidden bg-white">

      <h1>Header Component</h1>
      <Routes>
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout/>
          </CheckAuth>}>
           <Route path="login" element ={<AuthLogin/>}/>
           <Route path="register" element ={<AuthRegister/>}/>

        </Route>
        <Route path="/admin" element ={
           <CheckAuth isAuthenticated={isAuthenticated} user={user}>
           <AdminLayout/>
         </CheckAuth>}>
          
        <Route path="dashboard" element ={<AdminDashboard/>}/>
        <Route path="products" element ={<AdminProducts/>}/>
        <Route path="Orders" element ={<AdminOrders/>}/>
        <Route path="features" element ={<AdminFeatures/>}/>

        </Route>
        <Route path="/shop" element ={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout/>
            </CheckAuth>}>
          <Route path ="home" element={<ShoppingHome/>}/>
        <Route path ="Checkout" element={<ShoppingCheckout/>}/>
        <Route path ="listing" element={<ShoppingListing />}/>
        <Route path ="Account" element={<ShoppingAccount/>}/>
        
        </Route>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/unauth-page" element ={<UnauthPage/>}/>
      </Routes>
      
    </div>
    
  );
}

export default App;
