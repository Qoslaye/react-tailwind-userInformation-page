import React, { useState } from 'react';

const Information = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    age: '',
    skills: []
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => {
        const newSkills = checked
          ? [...prev.skills, value]
          : prev.skills.filter((skill) => skill !== value);
        return { ...prev, skills: newSkills };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-gray-100 p-6 shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold text-teal-700 mb-8 text-center">User Information Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
            placeholder="Enter your name"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
            placeholder="Enter your address"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
            placeholder="Enter your age"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="skills"
                value="HTML"
                checked={formData.skills.includes('HTML')}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-teal-600 focus:ring-2 focus:ring-teal-500 transition duration-300"
              />
              <span className="ml-2 text-gray-700">HTML</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="skills"
                value="CSS"
                checked={formData.skills.includes('CSS')}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-teal-600 focus:ring-2 focus:ring-teal-500 transition duration-300"
              />
              <span className="ml-2 text-gray-700">CSS</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="skills"
                value="JavaScript"
                checked={formData.skills.includes('JavaScript')}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-teal-600 focus:ring-2 focus:ring-teal-500 transition duration-300"
              />
              <span className="ml-2 text-gray-700">JavaScript</span>
            </label>
          </div>
        </div>
        
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-75 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>

      {submittedData && (
        <div className="mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Submitted Data</h2>
          <p className="mt-2 text-gray-700"><strong>Name:</strong> {submittedData.name}</p>
          <p className="mt-2 text-gray-700"><strong>Address:</strong> {submittedData.address}</p>
          <p className="mt-2 text-gray-700"><strong>Age:</strong> {submittedData.age}</p>
          <p className="mt-2 text-gray-700"><strong>Skills:</strong> {submittedData.skills.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default Information;
