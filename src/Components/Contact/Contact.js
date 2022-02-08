import React from 'react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
    const [status, setStatus] = useState("");
    const form = useRef();
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        if (!email || !message) {
            setStatus('error');
            return;
        }
        emailjs.sendForm("service_z246snx", "template_fqtkwdl", form.current,
            "user_YEyFM4UYWLyr4utnBneR1")
            .then(result => {
                setEmail("");
                setMessage("");
                console.log(result)
                setStatus('success')
            }).catch(err => {
                setStatus('error');
            })

    }
    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}>
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
                        <form ref={form} onSubmit={sendEmail} class=" shadow-xl shadow- 
                    shadow-purple-500 rounded-3xl px-8 pt-6 pb-3 mt-5 mb-4" >
                            <div class="mb-6 justify-left bg">
                                <label class="block text-sm font-bold mb-2 text-left text-white" for="username">
                                    Email/Phone number:
                                </label>
                                <input class="shadow border rounded w-full py-2 px-3 text-gray-700 
                            focus:outline-none focus:outline-purple-400 " id="username"
                                    type="text" name="from_name" placeholder="Email/Phone number" value={email} onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} />
                            </div>
                            <div class="mb-1">
                                <label class="block text-white text-sm font-bold mb-2 text-left" for="message">
                                    Message:
                                </label>
                                <textarea class="shadow rounded w-full py-2 px-3 
                            text-gray-700 mb-3  focus:outline-purple-400 focus:outline-none" id="message"
                                    placeholder="Leave a message here" name="message" value={message}
                                    onChange={(e) => {
                                        setMessage(e.target.value)
                                    }}
                                    rows="5" ></textarea>

                            </div>
                            <input type="submit" value="Send" className=" text-xl shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none
                         text-white font-bold py-2 px-6 rounded-lg active:scale-75 hover:scale-105 active:bg-gray-600" style={{ transition: "0.5s" }} />
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
                                            Could not send message, make sure both fields are provided and try again.
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
        </motion.div>




    );
};

export default Contact;
