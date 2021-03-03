import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';


const Landing = props => {
  const { state } = useContext(Store);

  console.log({ state, props });


  return (
    <div className="container valign-wrapper">
      <div className="row">
        <div className="card-panel grey lighten-1 center">
          <h4 class="white-text">
            Welcome to {' '} <span style={{ fontFamily: 'Dancing Script' }}>Stellar Scope</span>!
          </h4>
          <p className="flow-text white-text text-darken-1">
            View daily horoscope readings, compatibility guidance, and more.
          </p>
          <br />
          <div className="col s6">
            <Link to="/register" className="btn btn-large waves-effect waves-light hoverable purple lighten-1" style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}>
              Register
            </Link>
          </div>
          <div className="col s6">
            <Link to="/login" className="btn btn-large btn-flat waves-effect white black-text" style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
