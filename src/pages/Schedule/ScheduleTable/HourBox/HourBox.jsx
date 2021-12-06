import React from 'react'

import './HourBox.scss';

export default function HourBox({hour, selectSchedule, selectedHours, busyHours, notAvailableHours}) {
    const selectedButtonClass = selectedHours.includes(hour) ? 'selected-button' : '';
    const busyButtonClass = busyHours.includes(hour) ? 'busy-button' : '';
    const notAvailableClass = notAvailableHours.includes(hour) ? 'notAvailable-button' : '';

    return (
        <button className={`${busyButtonClass} ${notAvailableClass} ${selectedButtonClass} hour schedule-button sport-font1`} 
                onClick={()=>selectSchedule(hour)} disabled={busyHours.includes(hour) || notAvailableHours.includes(hour)}>
            <p>{hour}</p>
        </button>
    )
}
