import {
  createBrowserRouter,
  BrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import { Provider } from 'react-redux'
import {store , persisted_store} from "./Redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import Cart from "./pages/Cart/Cart";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Movies from "./pages/Movies/Movies";
import MoviePlayer from "./pages/MoviePlayer/MoviePlayer";
import UserProfile from"./pages/UserProfile/UserProfile"
import NotFound from "./pages/NotFound/NotFound"
import { ToastContainer } from 'react-toastify';
import WishList from "./pages/WishList/WishList";
import Support from "./pages/Support/Supports";
import CheckOut from "./pages/CheckOut/CheckOut";
import ProductShowCase from "./pages/ProductShowCase/ProductShowCase";
import { QueryContextProvider}  from "./Contexts/queryContext"
import URLParamsBox from "./helper/URLParamsBox"
import Signup from "./pages/Signup/Signup";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
// You can do this:
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<URLParamsBox />}>
      <Route path="/" element={<NavBar />} >
          <Route index element = { <Home />} />
          <Route path="/support" element = { <Support />} />
          <Route path="/showcase/:id" element = { <ProductShowCase />} />
      </Route>

      <Route path="/signup" element = { <Signup />} />
      <Route path="/forgot-password" element = { <ForgotPassword />} />
      <Route path="/reset-password/:userid/:token" element = { <ResetPassword />} />
      
    <Route path="/private" element = { <PrivateRoute />} >
        <Route  element = { <NavBar />} >
          <Route path="/private/cart" element = { <Cart />} />
          <Route path="/private/wishlist" element = { <WishList />} />
          <Route path="/private/movies" element = { <Movies />} />
          <Route path="/private/movies/movieplayer" element = { <MoviePlayer />} />
          <Route path="/private/profile" element = { <UserProfile />} />
        </Route>
      </Route>

      <Route path="/private" element = { <PrivateRoute />} >
          <Route path="/private/checkout" element = { <CheckOut />} />
      </Route>
      <Route path="*" element = { <NotFound />} />
    </Route>
    </>
  )
);

function App() {
  

  return (
    
    <Provider store={store}>
      <PersistGate loading={null} persistor={persisted_store}>
        <QueryContextProvider>
          <RouterProvider router={router}> 
          </RouterProvider>
          <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </QueryContextProvider>
      </PersistGate>
    </Provider>

    
  )
}

export default App
