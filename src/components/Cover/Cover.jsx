import React from 'react'

import './Cover.scss';


export default function Cover({children}) {
    return (
        <div className="cover">
            {children}
        </div>
    )
}
