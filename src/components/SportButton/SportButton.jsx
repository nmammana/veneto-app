import React from 'react'
import './SportButton.scss';

export default function SportButton({typeOfField, selectField}) {
    const {name, field, icon, selected} = typeOfField;
    const buttonSelected = selected ? 'selected' : ''; 
    return (
        <button className={`${buttonSelected} sport-button`} onClick={() => selectField(typeOfField)}>
            <span className={`icon ${icon}`}></span>
            <div className="description">
                <p className="sport sport-font1">{name}</p>
                <p className="field sport-font2">{field}</p>    
            </div>    
        </button>
    )
}
