import React, { useContext, useEffect, useState } from 'react';
import './SignInPage.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignInImage from '../../assets/images/undraw-upload-re-pasx_2023-03-09/undraw-upload-re-pasx.png';
import {
  FORGOT_PASSWORD,
  LOGIN_HERE,
  LOGIN_TITLE,
  REGISTER_HERE,
  REGISTER_TITLE,
  SIGN_IN_TITTLE_1,
  SIGN_IN_TITTLE_2,
} from '../../constants/strings';
import { HOME_ROUTE, SIGN_IN_ROUTE, SIGN_UP_ROUTE } from '../../constants/routes';
import makeRequest from '../../utils/makeRequest';
import { AUTH_LOGIN, AUTH_REGISTER, AUTH_VALIDATE } from '../../constants/apiEndPoints';
import { UserAuthContext } from '../../context/UserAuthProvider';

function SignInPage({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const { setUserData } = useContext(UserAuthContext);

  const validateToken = async token => {
    const res = await makeRequest(true, AUTH_VALIDATE, null, {
      headers: {
        authorization: token,
      },
    });
    setUserData(res);
    return res.email;
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      validateToken(token).then(isValid => {
        if (isValid) navigate(HOME_ROUTE);
      });
    }
  }, []);

  const onLoginClick = async () => {
    try {
      let registerRes;
      if (!login) {
        registerRes = await makeRequest(true, AUTH_REGISTER, null, {
          data: {
            email,
            password,
          },
        });
      }
      if (login || registerRes.email) {
        const res = await makeRequest(true, AUTH_LOGIN, null, {
          data: {
            email,
            password,
          },
        });
        localStorage.setItem('token', res.token);
        navigate(HOME_ROUTE);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-design">
        <div className="sign-in-title">
          <span>{SIGN_IN_TITTLE_1}</span>
          <br />
          <span>{SIGN_IN_TITTLE_2}</span>
        </div>
        <div className="sign-in-image">
          <img src={SignInImage} alt="" />
        </div>
      </div>
      <div className="sign-in-form">
        <span className="form-title">{login ? LOGIN_TITLE : REGISTER_TITLE}</span>
        <div className="form-container">
          <div className="input-label">
            <span>Email</span>
          </div>
          <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <div className="input-label">
            <span>Password</span>
          </div>
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          {error && <div className="error-message">{error}</div>}
          <button className="sign-in-button" type="submit" onClick={onLoginClick}>
            {login ? 'Login' : 'Register'}
          </button>
          {login && (
            <div className="forgot-password">
              <a href="./">{FORGOT_PASSWORD}</a>
            </div>
          )}
          {login && (
            <div className="forgot-password">
              <a href={SIGN_UP_ROUTE}>{REGISTER_HERE}</a>
            </div>
          )}
          {!login && (
            <div className="forgot-password">
              <a href={SIGN_IN_ROUTE}>{LOGIN_HERE}</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignInPage;

SignInPage.propTypes = {
  login: PropTypes.bool,
};

SignInPage.defaultProps = {
  login: false,
};
