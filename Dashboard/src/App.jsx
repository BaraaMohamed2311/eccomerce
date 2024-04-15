import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Users from './pages/users/Users';
import Nav from "./components/nav/navbar";
import Footer from "./components/footer/footer";
import Menu from "./components/menu/Menu";
import Product from "./pages/product/Product";
import User from "./pages/user/User";
import NotFound from "./pages/NotFound/NotFound";
import './styles/global.css'
import {ToastContainer } from"react-toastify"
import {  AllUsersContextProvider} from "./Contexts/AllUsersContext"
import { AllProductsContextProvider}  from "./Contexts/AllProductsContext"
function App() {

    const Layout = ()=>{
      return(
        <div className="layout">
          <Nav />
          <div className="main-content">
            <Menu />
            <Outlet />
          </div>
          <Footer />
          <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
        </div>
      )
    }

    

      const router = createBrowserRouter(createRoutesFromElements(
        <>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/users" element={<Users />}/>
          <Route path="/users/:id" element={<User />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/products/:id" element={<Product />}/>
        </Route>
        <Route path="*" element={<NotFound />}/>
        </>
      ));


  return (
    <AllProductsContextProvider>
        <AllUsersContextProvider >
          <RouterProvider router={router} />
        </AllUsersContextProvider>
    </AllProductsContextProvider>
);
  
}

export default App
