import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Bussiness from './component/BussinessSummary/Bussiness';
import Footer from './component/Header/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import SignUp from './component/SignUp/SignUp';
import Tools from './component/Tools/Tools';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path="/" element ={<Home/>}></Route>
       <Route path="/tools" element ={<Tools/>}></Route>
       <Route path="/BusinessSummary" element ={<Bussiness/>}></Route>
       <Route path="/login" element ={<Login/>}></Route>
       <Route path="/signup" element ={<SignUp/>}></Route>
       <Route path="/blog" element ={<Blog/>}></Route>
       <Route path="*" element ={<NotFound/>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
