import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

const ImageButton = (props) => {
  const Styles = props.localStyles;

  return(
    <View style={Styles.view}>

      <Text style={Styles.text}>
        {props.title}
      </Text>

      <TouchableOpacity onPress={props.onPress} >
        <Image
          style={Styles.image}
          source={props.image} />
      </TouchableOpacity>

    </View>
  );
}

ImageButton.propTypes = {
  localStyles: PropTypes.object,
  title: PropTypes.string,
  image: PropTypes.number,
  onPress: PropTypes.func,
}

export default ImageButton;
