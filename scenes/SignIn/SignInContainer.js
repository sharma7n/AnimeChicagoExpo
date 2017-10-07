import React, { Component } from 'react';

import SignIn from './SignIn';
import LocalStyles from './styles';
import ImageButton from '../../components/ImageButton/index';
import Constants from '../../config/constants';
import Wrapper from '../../layouts/Wrapper/index';

const SignInContainer = () => {
  const constants = new Constants();
  const meetup = {
    key: constants.meetupKey(),
    uri: constants.meetupURI(),
    mobile: constants.meetupSetMobile(),
  }

  return (
    <SignIn
      wrapper={Wrapper}
      localStyles={LocalStyles}
      imageButton={ImageButton}
      meetup={meetup} />
  );
}

export default SignInContainer;
