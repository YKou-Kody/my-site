import React from 'react'
import Item

    from './Item'
const Portfolio = () => {
    return (
        <div>
            <div className="flex justify-center">
                <div className="title">
                    <h1 className="text-7xl">
                        Portfolio
                    </h1>

                </div>
                <div>
                    <Item />

                </div>

            </div>
        </div>
    )
}

export default Portfolio
