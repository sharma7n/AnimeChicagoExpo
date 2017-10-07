import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

const TabBarButton = (props) => {
  const LocalStyles = props.localStyles;
  const Wording = props.wording;
  const Icon = props.icon;

  return(
    <TouchableOpacity onPress={props.onPress}>

      <Text style={LocalStyles.text}>
        {Wording}
      </Text>

    </TouchableOpacity>
  );
}

TabBarButton.propTypes = {
  localStyles: PropTypes.object,
  wording: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func,
}

export default TabBarButton;
