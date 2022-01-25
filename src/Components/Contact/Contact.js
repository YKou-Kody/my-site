import React from 'react';
import { useState } from 'react';

const Contact = () => {
    const [status, setStatus] = useState("");
    return (
        <div className="flex flex-col v-screen h-screen bg-gray-700 items-center justify-center">
            <div className="flex flex-col justify-between pt-5 items-center" >
                <div className="title text-white">
                    <h1 className="text-7xl font-semibold">
                        Contact me
                    </h1>

                </div>
            </div>
            <div className="flex flex-col justify-between pt-5 w-1/3 pb-48" >
                <p class="text-white text-left text-xs italic">If you have any questions, or would like to collaborate on
                    interesting side projects, please leave a message here or message me on LinkedIn and I'll respond in a timely manner, thanks! </p>
                <div className=" inline-block v-screen ">
                    <form class=" shadow-xl shadow- shadow-purple-500 rounded-3xl px-8 pt-6 pb-3 mt-5 mb-4" >
                        <div class="mb-6 justify-left bg">
                            <label class="block text-sm font-bold mb-2 text-left text-white" for="username">
                                Email/Phone number:
                            </label>
                            <input class="shadow border rounded w-full py-2 px-3 text-gray-700 
                            focus:outline-none focus:outline-purple-400 " id="username"
                                type="text" placeholder="Email" />
                        </div>
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2 text-left" for="message">
                                Message:
                            </label>
                            <textarea class="shadow rounded w-full py-2 px-3 
                            text-gray-700 mb-3  focus:outline-purple-400 focus:outline-none" id="message"
                                placeholder="Leave a message here"
                                rows="5" ></textarea>

                        </div>
                        <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none
                         text-white font-bold py-2 px-6 rounded-lg active:scale-75 hover:scale-105 active:bg-gray-600" type="button" onClick={(e) => {
                                e.preventDefault();
                                if (status == 'success') setStatus('error');
                                else setStatus("success");
                            }} style={{ transition: "0.5s" }}>
                            <p className="text-xl">Send!</p>
                        </button>
                        <p className='pt-3'>
                            {status == 'success' ? (
                                <div>
                                    <p class="text-center text-green-500 text-s">
                                        Your message has been sent, thanks for visiting!
                                    </p>
                                </div>
                            ) : ""}
                            {status == 'error' ? (
                                <div>
                                    <p class="text-center text-red-500 text-s">
                                        Could not send message, please try again.
                                    </p>
                                </div>
                            ) : ""}
                        </p>

                    </form>
                    {/* <p class="italic text-center text-white text-s">
                        Thanks for visiting!
                    </p> */}

                </div>
            </div >

        </div >




    );
};

export default Contact;
