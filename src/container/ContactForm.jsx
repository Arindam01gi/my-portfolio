import React, { useRef } from 'react';
import  {FaArrowRight} from 'react-icons/fa'
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, {
            publicKey: process.env.PUBLIC_KEY,
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-body-blue mb-6">Send Message</h2>
            <form className="space-y-6" ref={form} onSubmit={sendEmail}>
              <div>
                {/* <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label> */}
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label> */}
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                {/* <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label> */}
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors flex justify-center"
              >
               Start a conversation
               <FaArrowRight className="ml-2 mt-1" />
               
              </button>
            </form>
          </div>
  )
}

export default ContactForm