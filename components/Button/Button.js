import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

const Button = (props) => {
  const Styles = props.localStyles;

  return(
    <TouchableOpacity onPress={props.onPress}>
      <Text
        style={Styles.button} >

        {props.title}

      </Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  localStyles: PropTypes.object,
  title: PropTypes.string,
  onPress: PropTypes.func,
}

export default Button;
