import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home'
import Category from "./pages/Category";
import SingleItem from "./pages/SingleItem";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from "./pages/Error";
import Checkout from "./pages/Checkout";
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation()
  return (
    <>
      <Navbar/>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home/>} />
          <Route path='category/:category' element={<Category/>} />
          <Route path='category/:category/:item' element={<SingleItem/>} />
          <Route path='checkout' element={<Checkout/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </AnimatePresence>
      <ToastContainer className='font-bold'
      position='top-left'
      pauseOnFocusLoss={false}
      closeOnClick={true}
      autoClose={1500}
      hideProgressBar={true}
      />
    </>
  );
}

export default App
