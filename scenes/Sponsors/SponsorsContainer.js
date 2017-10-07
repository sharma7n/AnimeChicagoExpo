import React, { Component } from 'react';

import Sponsors from './Sponsors';
import LocalStyles from './styles';
import Wrapper from '../../layouts/Wrapper/index';

const SponsorsContainer = () => {

  return (
    <Sponsors
      localStyles={LocalStyles}
      wrapper={Wrapper}/>
  );
}

export default SponsorsContainer;
