import React , {createContext, useState} from 'react'
import Loading from '../components/Loading/Loading';
import Layout from '../components/Layout';

export const ReservationsContext = createContext();

export default function ReservationsContextProvider({children}) {
    
    const [user, setUser] = useState({
        pin: 0,
        tower: 0,
        floor: 0,
        apartment: "",
        wing: 0,
        userId: "",
        name: "",
        identityNumber: "",
    });

    const [reservation, setReservation] = useState({
        user: "",
        type: "",
        hours: [],       
    });

    const [fieldSelected, setFieldSelected] = useState({
        name:"",
        field:"",
        icon:"",
        selected:"",
        type:"",
    })

    const [isLoadingReservations, setIsLoadingReservations] = useState(false);

    if(isLoadingReservations){
        return (
            <Layout>
                <Loading/>
            </Layout>
        );
    }

    return (
        <ReservationsContext.Provider 
            value={{    user, setUser, 
                        reservation, setReservation, 
                        fieldSelected, setFieldSelected,
                        setIsLoadingReservations}}>
            {children}
        </ReservationsContext.Provider>
    )
}