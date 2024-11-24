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
function App() {

  return (
    <div className="flex flex-col overflow-hidden bg-white">

      <h1>Header Component</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout/>}>
           <Route path="login" element ={<AuthLogin/>}/>
           <Route path="register" element ={<AuthRegister/>}/>

        </Route>
        <Route path="/admin" element ={<AdminLayout/>} >
        <Route path="dashboard" element ={<AdminDashboard/>}/>
        <Route path="products" element ={<AdminProducts/>}/>
        <Route path="Orders" element ={<AdminOrders/>}/>
        <Route path="features" element ={<AdminFeatures/>}/>

        </Route>
        <Route path="/shop" element ={<ShoppingLayout/>}>
          <Route path ="home" element={<ShoppingHome/>}/>
        <Route path ="Checkout" element={<ShoppingCheckout/>}/>
        <Route path ="listing" element={<ShoppingListing />}/>
        <Route path ="Account" element={<ShoppingAccount/>}/>
        
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </div>
    
  );
}

export default App;
