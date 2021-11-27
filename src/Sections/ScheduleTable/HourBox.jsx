import React from 'react'

export default function HourBox({hour, select}) {
    return (
        <button className="hour shedule-button sport-font1" 
                onClick={()=>select(hour.hour)} 
                style={{color: hour.selected ? '#00B745' : '#008DC8',
                        borderColor: hour.selected ? '#00B745' : '#008DC8'}}>
            <p>{hour.hour}</p>
        </button>
    )
}
