import React from 'react';
import PropTypes from 'prop-types';

import ButtonContainer from './ButtonContainer';

const ButtonIndex = (props) => {
 return(
   <ButtonContainer
    title={props.title}
    onPress={props.onPress} />
 );
}

ButtonIndex.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
}

export default ButtonIndex;
