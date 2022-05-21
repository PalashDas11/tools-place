import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Tools from './component/Tools/Tools';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path="/" element ={<Home/>}></Route>
       <Route path="/tools" element ={<Tools/>}></Route>
       <Route path="/tools" element ={<Tools/>}></Route>
       <Route path="*" element ={<NotFound/>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
