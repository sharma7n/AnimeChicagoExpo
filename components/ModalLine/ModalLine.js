import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';

const ModalLine = (props) => {
  const LocalStyles = props.localStyles;

  return(
    <View style={LocalStyles.line} />
  );
}

ModalLine.propTypes = {
  localStyles: PropTypes.object,
}

export default ModalLine;
