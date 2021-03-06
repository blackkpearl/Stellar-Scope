import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';

const Landing = props => {
  const { state } = useContext(Store);

  console.log({ state, props });

  return (
    <div className="container" 
      style= {{
        width: '100%'
      }}>
      <div className="navbar">
        <Link to="/login" className="btn btn-medium waves-effect waves-light deep-purple lighten-2" style={{
            width: '150px',
            borderRadius: '3px',
            letterSpacing: '1.5px',
            float: 'right',
            marginTop: '1%'
          }}>
            Login
        </Link>
        <nav className="z-depth-0">
          <div className="nav-wrapper grey"
            style={{
              background: 'rgb(77,95,136)',
              background: 'radial-gradient(circle, rgba(77,95,136,1) 0%, rgba(81,39,81,1) 35%, rgba(9,2,13,1) 100%)',
            }}>
            <Link to="/" className="col s5 brand-logo center white-text" style={{ fontFamily: 'Dancing Script' }}>
              <i className="material-icons">nightlight_round</i> Stellar Scope
            </Link>
          </div>
        </nav>
      </div>
      <div className="row">
        <br />
        <br />
        <div className="container center">
          <h4 class="white-text">
            Welcome to {' '} <span style={{ fontFamily: 'Dancing Script' }}>Stellar Scope</span>!
          </h4>
          <p className="flow-text white-text text-darken-1">
            Learn more about astrology based on the given planets
          </p>
          <br />
          <div className="row vertical-center">
            <Link to="/register" className="btn center btn-large waves-effect waves-light hoverable purple darken-2" style={{
              // width: '140px',
              // borderRadius: '3px',
              // letterSpacing: '1.5px',
            }}>
              Register
            </Link>
          </div>
          {/* <div className="col s6">
           
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Landing;
