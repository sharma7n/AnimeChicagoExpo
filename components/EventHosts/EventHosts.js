import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
} from 'react-native';

const EventHosts = (props) => {
  const LocalStyles = props.localStyles
  const Data = props.eventHosts

  return(
    <View style={LocalStyles.container}>
      <Text style={LocalStyles.header}>
        Event Hosts
      </Text>
      {Data.map((data, index) =>
        <View key={index} style={LocalStyles.imageRow}>
          <Image
            style={LocalStyles.image}
            source={{uri: data.photo.photo_link}} />

          <Text style={LocalStyles.name}>
            {data.name}
          </Text>
        </View>
      )}
    </View>
  )
}

EventHosts.propTypes = {
  eventHosts: PropTypes.array,
  localStyles: PropTypes.object,
}

export default EventHosts;
