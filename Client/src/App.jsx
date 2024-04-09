import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import { Provider } from 'react-redux'
import store from "./Redux/store";
import Cart from "./pages/Cart/Cart";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Movies from "./pages/Movies/Movies";
import MoviePlayer from "./pages/MoviePlayer/MoviePlayer";
import UserProfile from"./pages/UserProfile/UserProfile"
import NotFound from "./pages/NotFound/NotFound"

// You can do this:
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<NavBar />} >
        <Route index element = { <Home />} />
        
        
    </Route>
   <Route path="/private" element = { <PrivateRoute />} >
      <Route  element = { <NavBar />} >
        <Route path="/private/cart" element = { <Cart />} />
        <Route path="/private/movies" element = { <Movies />} />
        <Route path="/private/movies/movieplayer" element = { <MoviePlayer />} />
        <Route path="/private/profile" element = { <UserProfile />} />
      </Route>
    </Route>
    <Route path="*" element = { <NotFound />} />
    </>
  )
);

function App() {


  return (
    <Provider store={store}>
        <RouterProvider router={router}>
        </RouterProvider>
    </Provider>

    
  )
}

export default App
