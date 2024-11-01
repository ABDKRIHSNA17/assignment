import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDetails } from "../redux/details";

function Form() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState([{
    name: '',
    email: '',
    message: '',
  }]);
  const [errors, setErrors] = useState({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const validateField = (name, value) => {
    let error = '';

    if (name === 'name' && !value.trim()) {
      error = 'Name is required';
    } else if (name === 'email') {
      if (!value.trim()) {
        error = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Invalid email format';
      }
    } else if (name === 'message' && !value.trim()) {
      error = 'Message is required';
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    const isFormValid = !error && formData.name && formData.email && formData.message;
    setIsSubmitDisabled(!isFormValid);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value);
  };




  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSubmitDisabled) {
      dispatch(addDetails(formData));
      alert('Form submitted!');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setIsSubmitDisabled(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg h-24"
            required
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className={`w-full text-white font-semibold p-2 rounded-lg transition duration-200 ${
            isSubmitDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-800'
          }`}
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
