import React from 'react'

const Icon = ({ icon, popup, currentPath, page }) => {
    return (
        <div className={page == window.location.pathname ? "iconActive group" : "icon group"}>
            {icon}
            < span className="icon-popup group-hover:scale-100" >
                {popup}
            </span >
        </div >
    )
}

export default Icon
