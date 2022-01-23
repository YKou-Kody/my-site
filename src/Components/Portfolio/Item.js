import React from 'react'
import { RGB_ETC1_Format } from 'three'

const Item = ({ img, title, description, details, skill }) => {
    return (

        <div>
            <div className="flex mt-10 rounded-2xl mb-10 overflow-visible hover:scale-125 hover:rounded-2xl transition-all
            hover:my-20 hover:shadow-none"
                style={{
                    boxShadow:
                        "10px 10px 24px 5px rgb(0 0 0 / 50%)",
                    transition: "0.5s"
                }}>
                <div className="rounded-l-2xl overflow-hidden flex justify-center"
                    style={{ width: "275px", height: "350px" }}>
                    <img className="hover:scale-150 " src={img}
                        className="object-cover h-full " />
                </div>
                <div className="w-96 rounded-r-2xl p-1 bg-gray-900 hover:bg-black "
                    style={{ width: "600px", height: "350px", color: "white", transition: "0.5s" }}>
                    <h1 className="text-3xl font-bold">
                        {title}

                    </h1>
                    <p className="mt-1 italic">
                        {description}
                        <div className="flex flex-row justify-center mt-1">
                            <div className="flex">
                                {skill}
                            </div>
                        </div>
                    </p>

                    <ul className="list-disc pl-12 flex flex-col mt-2">
                        {details?.map((point) => {
                            return (<li className="mt-2 mr-5 text-left">{point}</li>)
                        })}
                    </ul>

                </div>
            </div >
        </div >

    )
}

export default Item
