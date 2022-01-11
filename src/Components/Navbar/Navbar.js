import React from 'react'
import Icon from './Icon'
import { AiFillFolderOpen } from "react-icons/ai";
import { CgProfile } from "react-icons/cg"

const Navbar = () => {
    return (
        <div className="fixed h-screen top-0 w-16 bg-black m-0 flex flex-col bg-gray-900 text-white shadow-lg">
            <button>
                <Icon icon={<AiFillFolderOpen size="20" />} popup="Profile" />
            </button>
            <button>
                <Icon icon={<CgProfile />} popup="portfolio" />
            </button>
            <i>A</i>
            <i>A</i>
            <i>A</i>
            <i>A</i>
            <i>A</i>
            <i>A</i>

        </div>
    )
}

export default Navbar
