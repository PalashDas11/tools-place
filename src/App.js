import { Route, Routes } from 'react-router-dom';
import { ToastContainer  } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddProduct from './component/AdminRoute/AddProduct';
import ManageAll from './component/AdminRoute/ManageAll';
import ManageDetails from './component/AdminRoute/ManageDetails';
import ProductManage from './component/AdminRoute/ProductManage';
import Blog from './component/Blog/Blog';
import Bussiness from './component/BussinessSummary/Bussiness';
import Dashboard from './component/Dashboard/Dashboard';
import MyOder from './component/Dashboard/MyOder';
import MyProfile from './component/Dashboard/MyProfile';
import Payment from './component/Dashboard/Payment';
import Review from './component/Dashboard/Review';
import User from './component/Dashboard/User';
import Footer from './component/Header/Footer';
import Header from './component/Header/Header';
import MyProtflio from './component/Header/MyProtflio';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import RequireAdmin from './component/RequireAuth/RequireAdmin';
import RequireAuth from './component/RequireAuth/RequireAuth';
import SignUp from './component/SignUp/SignUp';
import OderModal from './component/Tools/OderModal';
import Tools from './component/Tools/Tools';
import ToolSingleItem from './component/Tools/ToolSingleItem';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path="/" element ={<Home/>}></Route>
       <Route path="/protflio" element ={<MyProtflio/>}></Route>
       <Route path="/tools" element ={<Tools/>}></Route>
       <Route path="/toolDetails/:toolId" element ={
         <RequireAuth>
       <ToolSingleItem></ToolSingleItem>
       </RequireAuth>
       }></Route>
       <Route path="/purchase/:toolId" element={
         <RequireAuth>
       <OderModal/>
       </RequireAuth>
       }></Route>

       <Route path="/dashboard" element ={<RequireAuth><Dashboard/></RequireAuth>}>
         <Route index element ={<MyOder></MyOder>}></Route>
         <Route path="review" element={<Review></Review>}></Route>
         <Route path="profile" element={<MyProfile></MyProfile>}></Route>
         {/* admin  */}
         <Route path="manage" element={<ManageAll></ManageAll>}></Route>
         <Route path="productManage" element={<ManageDetails></ManageDetails>}></Route>
         <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
         <Route path="users" element={<RequireAdmin><User></User></RequireAdmin>}></Route>

         {/* admin  */}
         <Route path="payment/:id" element={<Payment></Payment>}></Route>

       </Route>
       <Route path="/BusinessSummary" element ={<Bussiness/>}></Route>
       <Route path="/login" element ={<Login/>}></Route>
       <Route path="/signup" element ={<SignUp/>}></Route>
       <Route path="/blog" element ={<Blog/>}></Route>
       <Route path="*" element ={<NotFound/>}></Route>
     </Routes>
     <ToastContainer/>
     <Footer></Footer>
    </div>
  );
}

export default App;
