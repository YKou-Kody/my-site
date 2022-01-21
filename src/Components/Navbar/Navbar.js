import React from 'react'
import Icon from './Icon'
import Pic from './Pic';
import { AiFillFolderOpen, AiOutlineMail, AiOutlineBook } from "react-icons/ai";
import { RiComputerLine } from 'react-icons/ri';
import { CgProfile } from "react-icons/cg"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';



import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import react from 'react';


const Navbar = () => {

    const [page, setpage] = useState('page')
    return (
        <div className="fixed h-screen top-0 w-16 bg-black m-0 flex flex-col bg-gray-900 text-white shadow-lg"
            style={{ zIndex: "5" }}>
            {/* <Icon icon={<img src={Pic} />} popup="home" currentPath={currentPath} /> */}

            <button>
                <Link to="my-site" onClick={() => { setpage("/my-site") }}>
                    <Icon icon={<CgProfile size="25" />} page="/my-site" popup="Profile" />
                </Link>
            </button>
            <button>
                <Link to="portfolio" onClick={() => { setpage("/portfolio") }}>
                    <Icon icon={<AiFillFolderOpen size="25" />} page="/portfolio" popup="Portfolio" />
                </Link>
            </button>
            <button>
                <Link to="education" onClick={() => { setpage("/education") }}>
                    <Icon icon={<AiOutlineBook size="25" />} page="/education" popup="Education" />
                </Link>
            </button>

            <button>
                <Link to="hobbies" onClick={() => { setpage("/hobbies") }}>
                    <Icon icon={<RiComputerLine size="25" />} page="/hobbies" popup="🎮Hobbies" />
                </Link>
            </button>
            <button>
                <Link to="contact" onClick={() => { setpage("/contact") }}>
                    <Icon icon={<AiOutlineMail size="25" />} popup="Contact me" page="/contact" />
                </Link>
            </button>


        </div>
    )
}

export default Navbar
