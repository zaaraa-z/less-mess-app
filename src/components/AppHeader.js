import React from 'react';
import PropTypes from 'prop-types';

export const AppHeader = ({appHeaderText, appSlogan}) => {
    return <header>
    <img src="../imgs/logo.svg" alt="logo"></img>
    <h1>{appHeaderText}</h1>
    <p>{appSlogan}</p>
  </header>
}

//defining the default values of params
AppHeader.defaultProps = {
    appHeaderText: "App Header",
    appSlogan: "App Slogan"
}

//defining the types of params
AppHeader.propTypes = {
    appHeaderText: PropTypes.string,
    appSlogan: PropTypes.string
}