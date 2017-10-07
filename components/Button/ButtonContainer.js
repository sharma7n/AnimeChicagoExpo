import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Styles from './styles';

const ButtonContainer = (props) => {
  return(
    <Button
      localStyles={Styles}
      title={props.title}
      onPress={props.onPress} />
  );
}

ButtonContainer.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
}

export default ButtonContainer;
