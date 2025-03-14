import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const [popup, setPopup] = useState({ visible: false, firstName: '', lastName: '' });

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            const result = await emailjs.sendForm(
                'service_a62l1vi',
                'template_apj7t2f',
                form.current,
                'P-yN63nTb3stQdhkG'
            );
            console.log('Email successfully sent!', result.text);
            const firstName = e.target.FirstName.value;
            const lastName = e.target.LastName.value;
            setPopup({ visible: true, firstName, lastName });

            setTimeout(() => {
                setPopup({ visible: false });
            }, 5000);
        } catch (error) {
            console.log('Failed to send email:', error.text);
        }

        e.target.reset();
    };

  return (
    <div class="grid px-6 lg:px-12 md:grid-cols-2 lg:grid-cols-3 mx-auto py-6 font-custom mt-6 lg:mt-12">
            <div>
                <h2 class="text-white text-2xl font-semibold">Contact Information</h2>
                <div class="space-y-10 mt-8 font-custom">
                    <div class="flex">
                        <div class="w-8 h-8 flex items-center shrink-0 rounded border p-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-full" viewBox="0 0 32 32">
                                <path d="M8 30a1.001 1.001 0 0 1-1-1v-5H4c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h24c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3H15.851l-7.226 5.781A.998.998 0 0 1 8 30zM4 4c-.552 0-1 .449-1 1v16c0 .551.448 1 1 1h4a1 1 0 0 1 1 1v3.92l5.875-4.701A1 1 0 0 1 15.5 22H28c.552 0 1-.449 1-1V5c0-.551-.448-1-1-1z" data-original="#FFFFF" fill='white' />
                                <path d="M24 12H8a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zm-8 4H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z" data-original="#FFFFF" fill='white' />
                            </svg>
                        </div>
                        <div class="ml-4 text-white">
                            <h4 class="text-base font-semibold">E-mail to us</h4>
                            <p class="text-sm">Chat with our team to help.</p>
                            <p class="text-base font-semibold mt-4">info@sync-code.com</p>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="w-8 h-8 flex items-center shrink-0 rounded border p-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-full" viewBox="0 0 512 512">
                                <path d="M341.476 338.285c54.483-85.493 47.634-74.827 49.204-77.056C410.516 233.251 421 200.322 421 166 421 74.98 347.139 0 256 0 165.158 0 91 74.832 91 166c0 34.3 10.704 68.091 31.19 96.446l48.332 75.84C118.847 346.227 31 369.892 31 422c0 18.995 12.398 46.065 71.462 67.159C143.704 503.888 198.231 512 256 512c108.025 0 225-30.472 225-90 0-52.117-87.744-75.757-139.524-83.715zm-194.227-92.34a15.57 15.57 0 0 0-.517-.758C129.685 221.735 121 193.941 121 166c0-75.018 60.406-136 135-136 74.439 0 135 61.009 135 136 0 27.986-8.521 54.837-24.646 77.671-1.445 1.906 6.094-9.806-110.354 172.918L147.249 245.945zM256 482c-117.994 0-195-34.683-195-60 0-17.016 39.568-44.995 127.248-55.901l55.102 86.463a14.998 14.998 0 0 0 25.298 0l55.101-86.463C411.431 377.005 451 404.984 451 422c0 25.102-76.313 60-195 60z" data-original="#000000" fill='white'/>
                                <path d="M256 91c-41.355 0-75 33.645-75 75s33.645 75 75 75 75-33.645 75-75-33.645-75-75-75zm0 120c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45-20.187 45-45 45z" data-original="#000000" fill='white' />
                            </svg>
                        </div>
                        <div class="ml-4 text-white">
                            <h4 class="text-base font-semibold">Our location</h4>
                            <p class="text-sm">Visit our office</p>
                            <p class="text-base font-semibold mt-4">Pristina, Kosovo</p>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="w-8 h-8 flex items-center shrink-0 rounded border p-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-full" viewBox="0 0 473.806 473.806">
                                <path d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4-.2.2-.4.3-.5.5-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3.4.2.8.5 1.2.7 3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.3 10.2 10.3 20.7.1 31.3zm-154.2-286.1c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6zm217.2 96.3c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4z" data-original="#000000" fill='white' />
                            </svg>
                        </div>
                        <div class="ml-4 text-white">
                            <h4 class="text-base font-semibold">Call us</h4>
                            <p class="text-sm">Monday to Friday.</p>
                            <p class="text-base font-semibold mt-4">+383 45 490 985</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rounded-3xl lg:col-span-2 px-6 max-sm:px-0 flex flex-col justify-center mt-16 lg:mt-0">
                <h2 class="text-4xl font-semibold uppercase 2xl:text-5xl text-white font-custom">GET STARTED</h2>
                <p class="text-lg text-justify tracking-tight 2xl:text-xl text-white mt-4">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.</p>
                <form ref={form} onSubmit={sendEmail}>
                    <div class="space-y-6 mt-8 font-custom">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="FirstName" id="firstName" className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required />
                            <label htmlFor="firstName" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="LastName" id="lastName" className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required />
                            <label htmlFor="lastName" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" name="EmailAddress" id="email" className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required />
                            <label htmlFor="email" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Business Email</label>
                        </div>
                        
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="CompanyName" id="company" className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required />
                            <label htmlFor="company" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Name</label>
                        </div>

                        <div className="">
                           <select
                               name="OptionValue"
                               id="contact_purpose"
                               className="py-3 2xl:py-5 bg-transparent text-white w-full text-lg border-b-2 border-gray-400 focus:border-white outline-none"
                               required
                           >
                               <option value="" className='text-gray-500'>I want to</option>
                               <option value="Learn more about Sync Code" className='text-black mt-4'>Learn more Sync Code</option>
                               <option value="Become a Sync Code client" className='text-black'>Become a Sync Code client</option>
                               <option value="Solve a technical Issue" className='text-black'>Solve a technical Issue</option>
                               <option value="Start a project" className='text-black'>Start a project</option>
                               <option value="Other" className='text-black'>Other</option>
                           </select>
                       </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="AboutUs" id="about" className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required />
                            <label htmlFor="about" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">How did you hear about us ?</label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <input type='text' name="message" id="message" className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required></input>
                            <label htmlFor="message" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
                        </div>

                        <p className='text-gray-600'>Sync Code is dedicated to ensuring your privacy and protecting your personal data. We will use your information exclusively to manage your account and provide the services and products you have requested from us.</p>
                    </div>
                    <button type="submit"
                        class="bg-gradient-to-t from-[#207ead] to-[#00ffc3] mt-8 flex items-center hover:shadow-xl hover:shadow-gray-700 hover:animate-pulse justify-center text-sm w-fit rounded-[18px] px-4 py-2.5 font-semibold text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' class="mr-2"
                            viewBox="0 0 548.244 548.244">
                            <path fill-rule="evenodd"
                                d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                                clip-rule="evenodd" data-original="#000000" />
                        </svg>
                        Send Message
                    </button>
                </form>
            </div>
            {popup.visible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 h-44 justify-center items-center grid rounded shadow-lg text-center relative">
                        <h3 className="lg:text-xl flex mx-auto font-semibold text-green-700"><svg viewBox="0 0 48 48" className='w-[30px] object-contain' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect> <path d="M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z" fill="#78d756" stroke="#2d9abe" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 24L22 29L32 19" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg><span className='ml-2'>Your details has been successfully submitted!</span></h3>
                        <p className='mt-2 font-semibold'>Thank you, {popup.firstName} {popup.lastName}, for reaching out to us. We will get back to you shortly.</p>
                        <button onClick={() => setPopup({ visible: false })} className=" absolute top-0 right-0 bg-gradient-to-r from-[#207ead] to-[#00ffc3] hover:text-black font-bold text-white py-2 px-4 rounded hover:bg-blue-700 transition">X</button>
                    </div>
                </div>
            )}
        </div>
  )
}

export default Contact