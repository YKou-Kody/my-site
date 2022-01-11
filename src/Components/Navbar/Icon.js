import React from 'react'

const Icon = ({ icon, popup }) => {
    return (
        <div className="icon group">
            {icon}
            <span className="icon-popup group-hover:scale-100">
                testtest
                {popup}
            </span>
        </div>
    )
}

export default Icon
