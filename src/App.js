import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './components/Pages/About/About';
import Appointment from './components/Pages/Appointment/Appointment';
import Login from './components/Pages/Auth/Login';
import Register from './components/Pages/Auth/Register';
import RequireAdmin from './components/Pages/Auth/RequireAdmin';
import RequireAuth from './components/Pages/Auth/RequireAuth';
import ResetPassword from './components/Pages/Auth/ResetPassword';
import AddDoctor from './components/Pages/Dashboard/AddDoctor';
import AllUsers from './components/Pages/Dashboard/AllUsers';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import ManageDoctors from './components/Pages/Dashboard/ManageDoctors';
import MyAppointment from './components/Pages/Dashboard/MyAppointment';
import MyHistory from './components/Pages/Dashboard/MyHistory';
import MyReview from './components/Pages/Dashboard/MyReview';
import Payment from './components/Pages/Dashboard/Payment';
import Home from './components/Pages/Home/Home';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/password-reset' element={<ResetPassword></ResetPassword>}></Route>

        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>

        {/* Dashboard route start  */}
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='/dashboard/review' element={<MyReview></MyReview>}></Route>
          <Route path='/dashboard/my-history' element={<MyHistory></MyHistory>}></Route>
          <Route path='/dashboard/payment/:id' element={<Payment></Payment>}></Route>

          <Route path='/dashboard/all-users' element={
            <RequireAdmin>
              <AllUsers></AllUsers>
            </RequireAdmin>
          }></Route>

          <Route path='/dashboard/add-doctor' element={
            <RequireAdmin>
              <AddDoctor></AddDoctor>
            </RequireAdmin>
          }></Route>

          <Route path='/dashboard/manage-doctors' element={
            <RequireAdmin>
              <ManageDoctors></ManageDoctors>
            </RequireAdmin>
          }></Route>

        </Route>
        {/* Dashboard End  */}
        
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
