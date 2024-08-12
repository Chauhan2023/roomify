import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center">
      <div className="row w-100">
        
        {/* Image Section */}
        <div className="col-lg-8 d-none d-lg-block p-0">
          <div className="image-section h-100">
            <img
              src="https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
              alt="Login background"
              className="img-fluid h-100 w-100"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        
        {/* Login Form Section */}
        <div className="col-lg-4 d-flex align-items-center justify-content-center p-4">
          <div className="form p-4 shadow-lg rounded">
            <h2 className="title text-center mb-4">Welcome back to Roomify!</h2>
            
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="hello@gmail.com" />
            </div>

            <div className="mb-3 position-relative">
              <label className="form-label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Your password"
              />
              <span
                onClick={togglePasswordVisibility}
                className="position-absolute"
                style={{
                  right: '10px',
                  top: '70%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="keepLoggedIn" />
              <label className="form-check-label" htmlFor="keepLoggedIn">Keep me logged in</label>
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>

            <p className="text-center mt-3">
              Don&apos;t have an account?{' '}
              <a href="#" className="fw-bold" onClick={(event) => event.preventDefault()}>
                Register
              </a>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Login;
