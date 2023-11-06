import React from 'react'

const TooltipIconLabel = ({ icon, tooltipText, label }) => {
    return (
        <p>
            <div class="tooltip">
                <b><i className={icon}></i></b>
                <span class="tooltip-text">{tooltipText}</span>
            </div>
            {label}
        </p>
    )
}

export default TooltipIconLabel
