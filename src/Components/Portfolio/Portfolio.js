import React from 'react'
import Item

    from './Item'
const Portfolio = () => {
    return (
        <div className=" v-screen">
            <div className="flex justify-center">
                <div className="title">
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
    )
}

export default Portfolio
