import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Platform,
  Linking,
  TouchableOpacity,
} from 'react-native';

const Address = (props) => {
  const LocalStyles = props.localStyles

  const openGPS = () => {
    const scheme = Platform.OS === 'ios' ? 'http://maps.apple.com/' : 'geo:0,0'
    Linking.openURL(`${scheme}?q=${props.venue.name}+Chicago+Illinois`)
  }

  return(
    <View>
      <Text style={LocalStyles.name}>
        {props.venue.name}
      </Text>
      <TouchableOpacity onPress={openGPS}>
        <Text style={LocalStyles.address}>
          {props.venue.address_1}
          {props.venue.city}, {props.venue.state} {props.venue.zip}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

Address.propTypes = {
  venue: PropTypes.object,
  localStyles: PropTypes.object,
}

export default Address;
