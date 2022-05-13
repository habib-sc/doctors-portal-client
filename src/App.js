import { Route, Routes } from 'react-router';
import './App.css';
import About from './components/Pages/About/About';
import Appointment from './components/Pages/Appointment/Appointment';
import Login from './components/Pages/Auth/Login';
import Home from './components/Pages/Home/Home';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
