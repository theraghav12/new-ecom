import AuthRegister from "./pages/auth/register"
import AuthLogin from "./pages/auth/login"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import AuthLayout from "./components/auth/layout";
import AdminDashboard from "./pages/admin-view/dasboard";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/order";
import AdminFeatures from "./pages/admin-view/features";
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
      </Routes>
      
    </div>
    
  );
}

export default App;
