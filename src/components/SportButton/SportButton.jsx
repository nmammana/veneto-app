import React from 'react'
import './SportButton.scss';

export default function SportButton({typeOfField, selectField}) {
    const {name, field, icon, type} = typeOfField;
    return (
        <button className="sport-button" onClick={() => selectField(type)}>
            <span className={`icon ${icon}`}></span>
            <div className="description">
                <p className="sport sport-font1">{name}</p>
                <p className="field sport-font2">{field}</p>    
            </div>    
        </button>
    )
}
