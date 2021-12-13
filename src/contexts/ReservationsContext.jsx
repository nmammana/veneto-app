import React , {createContext, useEffect, useState} from 'react'
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
    

    const [isLoadingReservations, setIsLoadingReservations] = useState(true);

    const updateReservations = async() => {
        // todo:  loadReservations()
        setIsLoadingReservations(false);
    }

    useEffect(() => {
        updateReservations();
        console.log('env vble', process.env.REACT_APP_API_URL)
    },[])

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
                        fieldSelected, setFieldSelected}}>
            {children}
        </ReservationsContext.Provider>
    )
}