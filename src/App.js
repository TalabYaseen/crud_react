import './App.css';
import MainNavbar from './components/MainNavbar';
import Login from './components/Login';
import Readdata from './components/Readdata';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <MainNavbar></MainNavbar>
    <Routes>
    <Route path='/Login' element={< Login />}></Route>
    <Route path='/Register' element={< Register />}></Route>
    <Route path='/Home' element={< Readdata />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
