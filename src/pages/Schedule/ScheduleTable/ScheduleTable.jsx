import React from "react";
import "./ScheduleTable.scss";
import HourBox from "./HourBox/HourBox";

export default function ScheduleTable({
  selectSchedule,
  firstSelection,
  hours,
  selectedHours,
  busyHours,
  startTime,
  endTime,
}) {
  return (
    <>
      {firstSelection && selectedHours?.length === 0 && (
        <p className="body2 instruction">
          Seleccioná el horario en el que querés empezar tu turno.
        </p>
      )}
      {!firstSelection && (
        <p className="body2 instruction">
          Ahora, seleccioná el horario en el cual querés terminar tu turno.
        </p>
      )}
      {selectedHours?.length > 0 && firstSelection && (
        <p className="body2 instruction">
          Si querés modificar tu selección, tocá en un nuevo horario de comienzo
        </p>
      )}

      <div className="hours">
        {hours.map((hour, index) => (
          <HourBox
            key={index}
            hour={hour}
            selectSchedule={selectSchedule}
            selectedHours={selectedHours}
            busyHours={busyHours}
          />
        ))}
      </div>
    </>
  );
}
