import React, { useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../store';
import { registerUser, setErrors } from '../../store/actions/authActions';
import classnames from 'classnames';

const Register = props => {
  const { state, dispatch } = useContext(Store);
  const errors = state.error;
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();

  useEffect(() => {
    if (state.auth.isAuthenticated)
      props.history.push('/dashboard');
  }, [ state, props ]);

  const onSubmit = e => {
    e.preventDefault();

    dispatch(setErrors({ response: { data: {} } }));

    const userData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password2: password2Ref.current.value,
    };

    registerUser(userData, props.history)(dispatch);
  };

  return (
    <div className="container"
      style= {{
        width: '100%'
      }}>
     <div className="navbar">
        <nav className="z-depth-0">
          <div className="nav-wrapper grey"
            style={{
              background: 'rgb(77,95,136)',
              background: 'radial-gradient(circle, rgba(77,95,136,1) 0%, rgba(81,39,81,1) 35%, rgba(9,2,13,1) 100%)'
            }}>
            <Link to="/" className="col s5 brand-logo center white-text" style={{ fontFamily: 'Dancing Script' }}>
              <i className="material-icons">nightlight_round</i> Stellar Scope
            </Link>
          </div>
        </nav>
      </div>
      <div className="row">
        <div className="col s8 offset-s2">
          <Link to="/" className="btn-flat waves-effect white-text">
            <i className="material-icons left white-text">keyboard_backspace</i> Back to home
          </Link>
          <div className="col s12" style={{ paddingLeft: '11.250px' }}>
            <h4 class="white-text">
              <b class="white-text">Register</b> below
            </h4>
            <p className="grey-text text-darken-1">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
          <form noValidate onSubmit={onSubmit}>
            <div className="input-field col s12">
              <input ref={nameRef} error={errors.name} name="name" type="text"
                     className={classnames('', { invalid: errors.name })} />
              <label htmlFor="name">Name</label>
              <span className="red-text">{errors.name}</span>
            </div>
            <div className="input-field col s12">
              <input ref={emailRef} error={errors.email} name="email" type="email"
                     className={classnames('', { invalid: errors.email })} />
              <label htmlFor="email">Email</label>
              <span className="red-text">{errors.email}</span>
            </div>
            <div className="input-field col s12">
              <input ref={passwordRef} error={errors.password} name="password" type="password"
                     className={classnames('', { invalid: errors.password })} />
              <label htmlFor="password">Password</label>
              <span className="red-text">{errors.password}</span>
            </div>
            <div className="input-field col s12">
              <input ref={password2Ref} error={errors.password2} name="password2" type="password"
                     className={classnames('', { invalid: errors.password2 })} />
              <label htmlFor="password2">Confirm Password</label>
              <span className="red-text">{errors.password2}</span>
            </div>
            <div className="col s12" style={{ paddingLeft: '11.250px' }}>
              <button className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                marginTop: '1rem',
              }} type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
