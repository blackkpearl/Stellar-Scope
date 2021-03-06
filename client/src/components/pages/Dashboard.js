import React, { useEffect, useContext, useState, useRef } from 'react';
import { Store } from '../../store';
import { logoutUser } from '../../store/actions/authActions';
import API from '../../utils/apiHelper';
import { Link } from 'react-router-dom';
// import e from 'express';

const Dashboard = props => {
  const { state, dispatch } = useContext(Store);
  const [astroData, setAstroData] = useState();
  const searchRef = useRef();

  const user = state.auth.user;

  useEffect(() => {
    if (!state.auth.isAuthenticated)
      props.history.push('/login');

    API.getUser()
      .then(res => console.log({ res }))
      .catch(err => console.log({ err }));
  }, [state, props]);

  const astrologyAPICall = async (e) => {
    e.preventDefault()
    const dataRaw = {
      day: 12,
      month: 3,
      year: 1992,
      hour: 2,
      min: 23,
      lat: 19.132,
      lon: 72.342,
      tzone: 5.5
    };

    // var button = document.getElementById('btn1');
    // // when user clicks on button, we want to call function start search
    // button.addEventListener('click', Search);
    // function Search(event) {
    //   var userInputValue = document.getElementById('mySearch').value;
    //   var urlBase = 'https://json.astrologyapi.com/v1/general_house_report/:planet_name'
    //   if (userInputValue === null || userInputValue === '') return;
    //   var searchUrl = urlBase + userInputValue;
    //   performSearch(searchUrl);
    // }
    try {

      // var _selectedPlanet = ""
      const response = await fetch("https://json.astrologyapi.com/v1/general_house_report/" + searchRef.current.value, {
        method: 'POST', headers: {
          "Authorization": "Basic " + btoa("615856:4833e72955dc35aaff5f4cfb7e886220"),
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(dataRaw)
      });

      const data = await response.json();
      console.log(data)
      setAstroData(data)
    } catch (e) { console.log({ e }) }
  };

  const onLogoutClick = e => {
    e.preventDefault();

    logoutUser(props.history)(dispatch);
  };


  return (

    <div className="container"
      style={{
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
        <div class="container">
          <form id="search-site" action='search' method='get'>
            <div class="input-group">
              <div class="input-field">
                <input id="search" type="search" name='q' ref={searchRef} />
                <label class="label-icon" for="search">
                  <i class="material-icons" >search</i>
                </label>
              </div>
              <button type="submit" class="input-group-addon btn deep-purple lighten-2"
                onClick={astrologyAPICall}>search</button>
            </div>
          </form>
        </div>
        {astroData && <p class="white-text">{JSON.stringify(astroData, null, 2)}</p>}


      </div>
    </div>
  );
};

export default Dashboard;
