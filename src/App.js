import React, { Suspense } from 'react'
import './styles/Reset.scss';
import './styles/Global.scss';

import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Loading from './components/Loading/Loading';
import Home from './pages/Home/Home';
import Error404 from './pages/Error404';
import Towers from './pages/Towers/Towers';
import Wings from './pages/Wings/Wings';
import Apartments from './pages/Apartments/Apartments';
import Auth from './pages/Auth/Auth';
import Sports from './pages/Sports/Sports';
import Schedule from './pages/Schedule/Schedule';
import Reservation from './pages/Reservation/Reservation';
import ReservationsContextProvider from './contexts/ReservationsContext';

export default function App() {
  return (
    <ReservationsContextProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}> 
            <Routes> 
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/towers" element={<Towers/>}/>
                <Route exact path="/wings" element={<Wings/>}/>
                <Route exact path="/apartments" element={<Apartments/>}/>
                <Route exact path="/auth" element={<Auth/>}/>
                <Route exact path="/sports" element={<Sports/>}/>
                <Route exact path="/schedule" element={<Schedule/>}/>
                <Route exact path="/reservation" element={<Reservation/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </Suspense>
      </BrowserRouter>
    </ReservationsContextProvider>
    
  )
}
