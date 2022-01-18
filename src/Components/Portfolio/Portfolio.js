import React from 'react'
import Item from './Item'
import { AnimatePresence, motion } from 'framer-motion';
const Portfolio = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}>
            <div className=" v-screen bg-gray-700">
                {/* bg-gray-700 for background color */}

                <div className="flex justify-center pt-5 ">
                    <div className="title text-white">
                        <h1 className="text-7xl">
                            Portfolio
                            <br></br>
                        </h1>

                    </div>


                </div>

                <div className="flex justify-center">
                    <Item />
                </div>

                <div className="flex justify-center">
                    <Item />
                </div>

                <div className="flex justify-center">
                    <Item />
                </div>

                <div className="flex justify-center">
                    <Item />
                </div>

            </div>
        </motion.div>
    )
}

export default Portfolio
