import React from 'react'
import { RGB_ETC1_Format } from 'three'

const Item = ({ img, title, description }) => {
    return (

        <div>
            <div className="flex mt-10 rounded-2xl shadow-2xl mb-10"
                style={{
                    boxShadow: "5px 5px 1px 1px rgba(0, 0, 0, .3)",
                    boxShadow:
                        "7px 10px 24px 5px rgb(0 0 0 / 40%)"
                }}>
                <div className="rounded-l-2xl overflow-hidden"
                    style={{ width: "250px", height: "350px" }}>
                    <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                        className="object-cover h-full" />
                </div>
                <div className="w-96 rounded-r-2xl p-1 bg-gray-900"
                    style={{ width: "600px", color: "white" }}>
                    <h1 className="text-3xl font-bold">
                        {title}
                        title goes here
                    </h1>
                    asdasdasdsawsdfalkjsdaslkdj alksdj alskdj alskdj lk
                </div>
            </div>
        </div >

    )
}

export default Item
