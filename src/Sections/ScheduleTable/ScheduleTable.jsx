import React, { useState } from 'react'
import './ScheduleTable.scss';
import HourBox from './HourBox';

export default function ScheduleTable() {
    const [hours, setHours] = useState([
        {
            hour: "8:00",
            selected: false,
        },{
            hour: "8:30",
            selected: false,
        },{
            hour: "9:00",
            selected: false,
        },{
            hour: "9:30",
            selected: false,
        },{
            hour: "10:00",
            selected: false,
        },{
            hour: "10:30",
            selected: false,
        },{
            hour: "11:00",
            selected: false,
        },{
            hour: "11:30",
            selected: false,
        },{
            hour: "12:00",
            selected: false,
        },{
            hour: "12:30",
            selected: false,
        },{
            hour: "13:00",
            selected: false,
        },{
            hour: "13:30",
            selected: false,
        },{
            hour: "14:00",
            selected: false,
        },{
            hour: "14:30",
            selected: false,
        },{
            hour: "15:00",
            selected: false,
        },{
            hour: "15:30",
            selected: false,
        },{
            hour: "16:00",
            selected: false,
        },{
            hour: "16:30",
            selected: false,
        },{
            hour: "17:00",
            selected: false,
        },{
            hour: "17:30",
            selected: false,
        },{
            hour: "18:00",
            selected: false,
        },{
            hour: "18:30",
            selected: false,
        },{
            hour: "19:00",
            selected: false,
        },{
            hour: "19:30",
            selected: false,
        },{
            hour: "20:00",
            selected: false,
        },{
            hour: "20:30",
            selected: false,
        },{
            hour: "21:00",
            selected: false,
        },{
            hour: "21:30",
            selected: false,
        },{
            hour: "22:00",
            selected: false,
        },{
            hour: "22:30",
            selected: false,
        },{
            hour: "23:00",
            selected: false,
        },{
            hour: "23:30",
            selected: false,
        },{
            hour: "00:00",
            selected: false,
        },
    ])

    const select = (hourSelected) => {
        let hoursUpdated = [];
        hours.forEach(hour => {
            if(hour.hour == hourSelected){
                hoursUpdated.push({hour: hourSelected, selected: true})
            }else{
                hoursUpdated.push(hour);
            }
        })
        setHours(hoursUpdated);
    }

    return (
        <>
            <p className="body2">Elija el horario de inicio de su turno</p>
           
            <div className="hours">
                {hours.map((hour,index) => (
                    <HourBox key={index} hour={hour} select={select}/>
                ))}
            </div>
        
        </>
    )
}
