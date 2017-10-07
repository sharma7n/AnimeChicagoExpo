import React, { Component } from 'react';

import Wrapper from './Wrapper';
import GlobalStyles from '../../config/styles';
import TabBar from '../../components/TabBar/index';
import TabBarButton from '../../components/TabBarButton/index';

const WrapperContainer = (props) => {
  return (
    <Wrapper
      globalStyles={GlobalStyles}
      tabBar={TabBar}
      tabBarButton={TabBarButton} >

      {props.children}

    </Wrapper>
  );
}

export default WrapperContainer;

WrapperContainer.propTypes = {
}
