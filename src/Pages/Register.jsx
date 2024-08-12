import React, { useState,useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTimes } from 'react-icons/fa'; // Importing an icon library for the cross icon
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const fileInputRef = useRef(null);
  const navigate = useNavigate()



  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    phone: '',
    gender: '',
    email: '',
    userRole: 'Flatmate',
    DOB: '',
    password: '',
    profilePic: null,
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [profilePicPreview, setProfilePicPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, profilePic: file });

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  const handleRemoveImage = () => {
    setFormData({ ...formData, profilePic: null });
    setProfilePicPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Reset the file input
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'profilePic' && formData[key]) {
        data.append('profilePic', formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setSuccessMessage('Registration successful!');
      setError('');
      console.log('Response:', result);
      navigate('/login')

      setFormData({
        firstName: '',
        middleName: '',
        lastName: '',
        phone: '',
        gender: '',
        email: '',
        role: '',
        DOB: '',
        password: '',
        profilePic: null,
      });
      setProfilePicPreview(null);
    } catch (error) {
      setError('There was a problem with your registration.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center py-4" style={{ backgroundColor: '#36b4e7' }}>
      <div className="container">
        <div className="card shadow-sm p-4" style={{ borderRadius: '8px' }}>
          <div className="text-center mb-4">
            <img src='https://roomify.akashsaini.info/wp-content/uploads/2024/04/ROOMIEFY.jpeg' alt="Logo" style={{ maxWidth: '100px', height: 'auto' }} />
          </div>
          <h4 className="text-center mb-3">Registration</h4>
          <h6 className="text-center mb-4">Create Your Account</h6>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="middleName" className="form-label">Middle Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="middleName"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="gender" className="form-label">Gender</label>
                <select
                  className="form-control"
                  id="gender"
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="DOB" className="form-label">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  id="DOB"
                  name="DOB"
                  required
                  value={formData.DOB}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="profilePic" className="form-label">Profile Picture</label>
                <input
                  type="file"
                  className="form-control"
                  id="profilePic"
                  name="profilePic"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                />
              </div>
              <div className="col-md-6 mb-3">
                {profilePicPreview && (
                  <div className="position-relative text-center">
                    <img
                      src={profilePicPreview}
                      alt="Profile Preview"
                      className="img-thumbnail"
                      style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                    />
                    <button
                      type="button"
                      className="btn btn-danger btn-sm position-absolute"
                      style={{ top: '30px', transform: 'translate(50%, -50%)', borderRadius: '50%' }}
                      onClick={handleRemoveImage}
                    >
                      <FaTimes />
                    </button>
                  </div>
                )}
              </div>
              <div className="col-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={loading}
                  style={{ backgroundColor: '#36b4e7', borderColor: '#2a9fd6' }}
                >
                  {loading ? <span className="spinner-border spinner-border-sm"></span> : 'Register'}
                </button>
              </div>
            </div>
          </form>
          {error && <div className="alert alert-danger mt-3 text-center">{error}</div>}
          {successMessage && <div className="alert alert-success mt-3 text-center">{successMessage}</div>}
          <div className="text-center mt-4">
            <p>
              Already have an account? <a href="/login" style={{ color: '#36b4e7' }}>Log In</a>
            </p>
            <p>
              By selecting one of the above you agree to our <a href="/terms" style={{ color: '#36b4e7' }}>Terms & Conditions</a> and <a href="/privacy" style={{ color: '#36b4e7' }}>Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;