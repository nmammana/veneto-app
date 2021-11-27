import React , {createContext, useEffect, useState} from 'react'
import Loading from '../components/Loading/Loading';
import Layout from '../components/Layout';

export const ReservationsContext = createContext();

export default function ReservationsContextProvider({children}) {
    //const [reservations, setReservations] = useState([]);
    const [user, setUser] = useState({
        tower: 0,
        wing: 0,
        floor: 0,
        apartment: "",
        pin: 0,
    });

    const [reservation, setReservation] = useState({
        userId: "",
        type: "",
        hours: [],       
    });
    

    const [isLoadingReservations, setIsLoadingReservations] = useState(true);

    const updateReservations = async() => {
        // todo:  loadReservations()
        setIsLoadingReservations(false);
    }

    useEffect(() => {
        updateReservations();
    },[])

    if(isLoadingReservations){
        return (
            <Layout>
                <Loading/>
            </Layout>
        );
    }

    return (
        <ReservationsContext.Provider value={{user, setUser, reservation, setReservation}}>
            {children}
        </ReservationsContext.Provider>
    )
}