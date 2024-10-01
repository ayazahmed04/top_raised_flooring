import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faTwitter,
   faFacebook,
   faInstagram,
   faLinkedin,
   faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
   const form = useRef()

   const sendEmail = (e) => {
      e.preventDefault()

      emailjs
         .sendForm(
            'service_wf79zz4',
            'template_3nl9tic',
            form.current,
            'WrrKqAi1BZnXnMEmE'
         )
         .then(
            (result) => {
               console.log(result.text)
               alert('Message sent successfully!')
            },
            (error) => {
               console.log(error.text)
               alert('An error occurred, please try again.')
            }
         )
   }

   return (
      <div className="min-h-screen bg-gray-100">
         <div className="container mt-24 mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
               Contact Us
            </h2>

            {/* Contact Details */}
            <div className="mb-8">
               <h3 className="text-2xl font-semibold text-gray-700">
                  Get in Touch
               </h3>
               <p className="text-gray-600 mt-4">
                  Feel free to reach out to us via the following channels:
               </p>
               <div className="mt-4">
                  <p className="text-gray-800">Phone: +971 56 5969 600</p>
                  <p className="text-gray-800">
                     Email: adraisedflooring@gmail.com
                  </p>
                  <p className="text-gray-800">
                     Address: 113 - Jabal Ali Industrial Area 1, Dubai, United
                     Arab Emirates
                  </p>
               </div>
            </div>

            {/* Social Media */}
            <div className="mb-8">
               <h3 className="text-2xl font-semibold text-gray-700">
                  Follow Us
               </h3>
               <div className="flex space-x-4 mt-4">
                  <a
                     href="https://www.facebook.com/profile.php?id=61565542242315"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-gray-500 hover:text-blue-700"
                  >
                     <FontAwesomeIcon icon={faFacebook} size="3x" />
                  </a>
                  <a
                     href="whatsapp://send?phone=+971 56 596 9600"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-gray-500 hover:text-blue-800"
                  >
                     <FontAwesomeIcon icon={faWhatsapp} size="3x" />
                  </a>
               </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
               <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Send Us a Message
               </h3>
               <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-4">
                     <label className="block text-gray-700">Name</label>
                     <input
                        type="text"
                        name="user_name"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        placeholder="Your Name"
                        required
                     />
                  </div>
                  <div className="mb-4">
                     <label className="block text-gray-700">Email</label>
                     <input
                        type="email"
                        name="user_email"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        placeholder="Your Email"
                        required
                     />
                  </div>
                  <div className="mb-4">
                     <label className="block text-gray-700">Phone Number</label>
                     <input
                        type="tel"
                        name="user_phone"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        placeholder="Your Phone Number"
                        required
                     />
                  </div>
                  <div className="mb-4">
                     <label className="block text-gray-700">Message</label>
                     <textarea
                        name="message"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        rows="4"
                        placeholder="Your Message"
                        required
                     ></textarea>
                  </div>
                  <button
                     type="submit"
                     className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
                  >
                     Send Message
                  </button>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Footer

/*
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faTwitter,
   faFacebook,
   faInstagram,
   faLinkedin,
   faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
   const form = useRef()

   const sendEmail = (e) => {
      e.preventDefault()

      emailjs
         .sendForm(
            'service_wf79zz4',
            'template_3nl9tic',
            form.current,
            'WrrKqAi1BZnXnMEmE'
         )
         .then(
            (result) => {
               console.log(result.text)
               alert('Message sent successfully!')
            },
            (error) => {
               console.log(error.text)
               alert('An error occurred, please try again.')
            }
         )
   }

   return (
      <div className="min-h-screen bg-gray-100 ">
         <div className="container mt-24 mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
               Contact Us
            </h2>

            <div className="mb-8">
               <h3 className="text-2xl font-semibold text-gray-700">
                  Get in Touch
               </h3>
               <p className="text-gray-600 mt-4">
                  Feel free to reach out to us via the following channels:
               </p>
               <div className="mt-4">
                  <p className="text-gray-800">Phone: +971 56 5969 600</p>
                  <p className="text-gray-800">
                     Email: adraisedflooring@gmail.com
                  </p>
                  <p className="text-gray-800">
                     Address: 113 - Jabal Ali Industrial Area 1, Dubai, United
                     Arab Emirates
                  </p>
               </div>
            </div>

            <div className="mb-8">
               <h3 className="text-2xl font-semibold text-gray-700">
                  Follow Us
               </h3>
               <div className="flex space-x-4 mt-4">
                 <a
                     href="https://www.facebook.com/profile.php?id=61565542242315"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-gray-500 hover:text-blue-700"
                  >
                     <FontAwesomeIcon icon={faFacebook} size="3x" />
                     href="whatsapp://send?phone=+971 56 596 9600"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-gray-500 hover:text-blue-800"
                  >
                     <FontAwesomeIcon
                        icon={faWhatsapp}
                        target="_blank"
                        size="3x"
                     />
                  </a>
               </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
               <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Send Us a Message
               </h3>
               <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-4">
                     <label className="block text-gray-700">Name</label>
                     <input
                        type="text"
                        name="user_name"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        placeholder="Your Name"
                        required
                     />
                  </div>
                  <div className="mb-4">
                     <label className="block text-gray-700">Email</label>
                     <input
                        type="email"
                        name="user_email"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        placeholder="Your Email"
                        required
                     />
                  </div>
                  <div className="mb-4">
                     <label className="block text-gray-700">Message</label>
                     <textarea
                        name="message"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        rows="4"
                        placeholder="Your Message"
                        required
                     ></textarea>
                  </div>
                  <button
                     type="submit"
                     className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
                  >
                     Send Message
                  </button>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Footer

*/
