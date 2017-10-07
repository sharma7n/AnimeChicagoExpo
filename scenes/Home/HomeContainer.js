import React, { Component } from 'react';

import Home from './Home';
import LocalStyles from './styles';
import SmallCard from '../../components/SmallCard/index';
import Wrapper from '../../layouts/Wrapper/index';
import Constants from '../../config/constants';
import EventHosts from '../../components/EventHosts/index';
import Address from '../../components/Address/index';
import ModalLine from '../../components/ModalLine/index';

const HomeContainer = () => {
  const constants = new Constants();
  const Admins = constants.admins();

  return (
    <Home
      localStyles={LocalStyles}
      smallCard={SmallCard}
      wrapper={Wrapper}
      admins={Admins}
      eventHosts={EventHosts}
      address={Address}
      modalLine={ModalLine} />
  );
}

export default HomeContainer;
