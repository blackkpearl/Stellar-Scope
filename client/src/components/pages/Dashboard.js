import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';
import { logoutUser } from '../../store/actions/authActions';
import API from '../../utils/apiHelper';
import { Link } from 'react-router-dom';

const Dashboard = props => {
  const { state, dispatch } = useContext(Store);
  const user = state.auth.user;

  useEffect(() => {
    if (!state.auth.isAuthenticated)
      props.history.push('/login');

    API.getUser()
    .then(res => console.log({ res }))
    .catch(err => console.log({ err }));
  }, [ state, props ]);

  const onLogoutClick = e => {
    e.preventDefault();

    logoutUser(props.history)(dispatch);
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
          <button
            className="btn medium waves-effect waves-light deep-purple lighten-2"
            style={
              {
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                float: 'right',
                marginTop: '1%'
              }
            }
            onClick={onLogoutClick}>
            Logout
          </button>
            <Link to="/" className="col s5 brand-logo center white-text" style={{ fontFamily: 'Dancing Script' }}>
              <i className="material-icons">nightlight_round</i> Stellar Scope
            </Link>
          </div>
          
        </nav>
      </div>
      <div className="row">
        <div className="col s12 center-align">
          <h4 class="white-text">
            <b class="white-text">Hey there,</b> {user.name.split(' ')[0]}
            <p className="flow-text grey-text text-darken-1">
              Search any planet{' '}
            </p>
          </h4>
        </div>
      </div>
      <div className="row">
        <div class="input-field col s3 center-align white-text"></div>  
        <div class="input-field col s6 center-align white-text">
          <i class="white-text material-icons prefix">search</i>
          <input type="text" placeholder="search" id="autocomplete-input" class="autocomplete white-text"></input>
        </div>
        <div class="input-field col s16 center-align white-text"></div>
      </div>
    </div>
  );
};

export default Dashboard;
