import React, { Suspense } from 'react'
import './styles/Reset.scss';
import './styles/Global.scss';

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import Loading from './components/Loading/Loading';
import Welcome from './pages/Welcome/Welcome';
import Error404 from './pages/Error404';
import Towers from './pages/Towers/Towers';
import Wings from './pages/Wings/Wings';
import Apartments from './pages/Apartments/Apartments';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import Sports from './pages/Sports/Sports';
import Schedule from './pages/Schedule/Schedule';
import Reservation from './pages/Reservation/Reservation';
import SuccessfulReservation from './pages/SuccessfulReservation/SuccessfulReservation';
import MyReservations from './pages/MyReservations/MyReservations';
import ReservationsContextProvider from './contexts/ReservationsContext';
import IdleTimerContainer from './components/IdleTimerContainer';

import { injectStyle } from "react-toastify/dist/inject-style";

// CALL IT ONCE IN YOUR APP
if (typeof window !== "undefined") {
  injectStyle();
}

export default function App() {
  return (
    <ReservationsContextProvider>
      
      <BrowserRouter>
      <IdleTimerContainer>
        <Suspense fallback={<Loading />}> 
            <Routes> 
                {/***** Public Routes *****/}
                <Route path="/" element={ <PublicRoute><Welcome/></PublicRoute> }/>
                <Route path="/towers" element={ <PublicRoute><Towers /></PublicRoute>}/>
                <Route path="/wings" element={ <PublicRoute><Wings/></PublicRoute> }/>
                <Route path="/apartments" element={ <PublicRoute><Apartments/></PublicRoute> }/>
                <Route path="/auth" element={ <PublicRoute><Auth/></PublicRoute> }/>
                {/***** Private Routes *****/}
                <Route path="/home" element={ <PrivateRoute><Home/></PrivateRoute> }/>
                <Route path="/sports" element={ <PrivateRoute><Sports/></PrivateRoute> }/>
                <Route path="/schedule" element={ <PrivateRoute><Schedule/></PrivateRoute> }/>
                <Route path="/reservation" element={ <PrivateRoute><Reservation/></PrivateRoute> }/>
                <Route path="/success" element={ <PrivateRoute><SuccessfulReservation/></PrivateRoute> }/>
                <Route path="/myReservations" element={ <PrivateRoute><MyReservations/></PrivateRoute> }/>
                
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </Suspense>
      </IdleTimerContainer>
      </BrowserRouter>
      
    </ReservationsContextProvider>
    
  )
}
