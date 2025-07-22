
import './../../assets/css/loginpage.css'
import { FaGoogle, FaFacebookF, FaApple, FaEnvelope, FaLock } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <div className="login-bg d-flex justify-content-center align-items-center vh-100 position-relative">
        <div className='design-dot-1'></div>
      <div className="login-card shadow rounded-4 d-flex overflow-hidden">
        {/* Left Image Section */}
        <div className="login-left text-white d-flex flex-column justify-content-center align-items-center p-4">
          <h1 className="login-title mb-2">Panasonic</h1>
          <p className="login-subtitle text-center">
            Travel is the only purchase that enriches you in ways beyond material wealth
          </p>
        </div>

        {/* Right Form Section */}
        <div className="login-right bg-white p-4 d-flex flex-column justify-content-center" style={{ minWidth: '320px' }}>
          <h2 className="login-title-right text-center mb-0">Welcome</h2>
          <small className="login-subtitle-right text-center">Login with Email</small>

          <form className='mt-4'>
            <div className="form-group mb-3 position-relative">
                <label htmlFor="email" className='label-sorath'>Email</label>
              <FaEnvelope className="form-icon" />
              <input type="email" className="form-control sorath-input-text ps-5 p-10" placeholder="Email id" />
            </div>

            <div className="form-group position-relative">
                <label htmlFor="password" className='label-sorath'>Password</label>
              <FaLock className="form-icon" />
              <input type="password" className="form-control sorath-input-text ps-5 p-10" placeholder="Password" />
            </div>
            <div className="text-end mb-3">
          <small className="login-subtitle-right">Forgot your password?</small>
            </div>
            <button type="submit" className="login-btn-sorath mb-3">LOGIN</button>
          </form>

          <div className="text-center mb-3 position-relative d-flex or-line-with">
            <span>OR</span>
            <hr className='or-line' />
          </div>
          <div className="d-flex justify-content-between gap-2 mb-4">
            <button className="btn btn-outline-secondary w-100"><FaGoogle /></button>
            <button className="btn btn-outline-secondary w-100"><FaFacebookF /></button>
            <button className="btn btn-outline-secondary w-100"><FaApple /></button>
          </div>

          <div className="text-center">
            <span className="text-muted">Don't have an account?</span> <a href="#">Register Now</a>
          </div>
        </div>
      </div>
        <div className='design-dot-2'></div>
    </div>
  );
};

export default LoginPage;
