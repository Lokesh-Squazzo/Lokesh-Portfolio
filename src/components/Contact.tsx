import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    purpose: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    date: '',
    purpose: '',
  });

  // Handle form data change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = { name: '', email: '', date: '', purpose: '' };

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.purpose) newErrors.purpose = 'Purpose is required';

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== '');
  };

  // Submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, perform the submission logic here (e.g., API call)
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({
        name: '',
        email: '',
        date: '',
        purpose: '',
        message: '',
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-center">
      <h2 className="text-3xl font-bold text-white mb-8">Enquiry Form</h2>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-pink-200 space-y-6">
        {/* Name Field */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
          />
          {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
          />
          {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
        </div>

        {/* Date Field */}
        <div>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
          />
          {errors.date && <p className="text-red-500 text-sm mt-2">{errors.date}</p>}
        </div>

        {/* Purpose Dropdown */}
        <div>
          <select
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
          >
            <option value="">Select Purpose</option>
            <option value="general-inquiry">General Inquiry</option>
            <option value="feedback">Feedback</option>
            <option value="support">Support</option>
          </select>
          {errors.purpose && <p className="text-red-500 text-sm mt-2">{errors.purpose}</p>}
        </div>

        {/* Message Field */}
        <div>
          <textarea
            name="message"
            placeholder="Your Message (Optional)"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition"
        >
          Submit Enquiry
        </button>
      </form>

      <div className="mt-12">
        <h3 className="text-xl font-semibold text-white mb-4">Connect with Me</h3>
        <div className="flex justify-center gap-8">
          {/* Email Link */}
          <a
            href="mailto:lokeshchaudhari7411@gmail.com"
            className="text-white text-3xl hover:text-pink-500 transition duration-300 transform hover:scale-110"
          >
            <FaEnvelope />
          </a>

          {/* GitHub Link */}
          <a
            href="https://github.com/Lokesh-Squazzo"
            className="text-white text-3xl hover:text-pink-500 transition duration-300 transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/lokesh-chaudhari-917778280/"
            className="text-white text-3xl hover:text-pink-500 transition duration-300 transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
