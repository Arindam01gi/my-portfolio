import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, } from 'react-icons/fa';
// import GoogleMap from './GoogleMap';
import ContactForm from './ContactForm';
import PopUp from '../utils/PopUp';

const Contact = () => {
  return (
    <div className="pt-8 flex justify-center items-center bg-blue-100 py-8 min-h-screen">
      <div className="w-5/6">
        <h1 className="text-4xl font-extrabold text-body-blue tracking-wide mb-8"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Contact Me
        </h1>

        <PopUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-body-blue mb-6">Let's Connect!</h2>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 rounded-full mr-4">
                    <FaEnvelope className="text-body-blue text-xl" />
                  </div>
                  <div>
                    {/* <h3 className="font-semibold text-gray-800">Email</h3> */}
                    <p className="text-gray-600">arindammaiti2018@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 rounded-full mr-4">
                    <FaPhone className="text-body-blue text-xl" />
                  </div>
                  <div>
                    {/* <h3 className="font-semibold text-gray-800">Phone</h3> */}
                    <p className="text-gray-600">+91 8346945439</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-body-blue text-xl" />
                  </div>
                  <div>
                    {/* <h3 className="font-semibold text-gray-800">Location</h3> */}
                    <p className="text-gray-600">Kolkata, India</p>
                  </div>
                </div>
                {/* <div className="flex items-center">
                  <GoogleMap/>
              </div> */}
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />

          </div>

        </PopUp>
        <div className="text-center mt-8 text-gray-600">
          &copy; {new Date().getFullYear()} Arindam Maiti. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Contact;