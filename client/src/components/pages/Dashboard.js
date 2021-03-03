import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';
import { logoutUser } from '../../store/actions/authActions';

import API from '../../utils/apiHelper';

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
    <div className="container" style={{ height: '75vh' }}>
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>Hey there,</b> {user.name.split(' ')[0]}
            <p className="flow-text grey-text text-darken-1">
              You are logged into a full-stack{' '} <span style={{ fontFamily: 'monospace' }}>MERN</span> app
            </p>
          </h4>

          <button
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            style={
              {
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                marginTop: '1rem',
              }
            }
            onClick={onLogoutClick}>
            Logout
          </button>
        </div>
      </div>
      <div className="row">
        <div class="col s4 center-align">
          <div class="card">
            <div class="card-image">
              <img src="images/sample-1.jpg"/>
              <span class="card-title">Daily Astrology</span>
            </div>
            <div class="card-content">
              <p>.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div class="col s4 center-align">
          <div class="card">
            <div class="card-image">
              <img src="images/sample-1.jpg"/>
              <span class="card-title">Match Making</span>
            </div>
            <div class="card-content">
              <p>.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div class="col s4 center-align">
          <div class="card">
            <div class="card-image">
              <img src="images/sample-1.jpg"/>
              <span class="card-title">Horoscope</span>
            </div>
            <div class="card-content">
              <p>.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        
      </div>
    </div>

  );
};

export default Dashboard;
