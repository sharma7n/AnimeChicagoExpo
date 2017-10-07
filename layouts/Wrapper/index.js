import React, { Component } from 'react';

import WrapperContainer from './WrapperContainer';

const WrapperIndex = (props) => {
  return (
    <WrapperContainer>
      {props.children}
    </WrapperContainer>
  );
}

export default WrapperIndex;

WrapperIndex.propTypes = {
}
