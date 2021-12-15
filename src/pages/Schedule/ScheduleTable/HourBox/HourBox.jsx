import React from 'react'

import './HourBox.scss';

export default function HourBox({hour, selectSchedule, selectedHours, busyHours}) {
    const selectedButtonClass = selectedHours.includes(hour) ? 'selected-button' : '';
    const busyButtonClass = busyHours.includes(hour) ? 'busy-button' : '';

    return (
        <button className={`${busyButtonClass} ${selectedButtonClass} hour schedule-button sport-font1`} 
                onClick={()=>selectSchedule(hour)} disabled={busyHours.includes(hour)}>
            <p>{hour}</p>
        </button>
    )
}
