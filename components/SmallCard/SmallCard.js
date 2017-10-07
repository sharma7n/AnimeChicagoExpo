import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const SmallCard = (props) => {

  const displayTime = (data) => {
    const parsedTime = new Date(data.time);
    return `${parsedTime.getMonth() + 1}/${parsedTime.getDate()}/${parsedTime.getFullYear()}`;
  }

  const Styles = props.localStyles;
  const Data = props.displayData;
  const StandardTime = props.standardTime;

  return(
    <TouchableOpacity onPress={props.handleModalPress}>
      <View style={Styles.body}>
        <Text style={Styles.text}>
          {Data.name}
        </Text>

        <Text style={Styles.text}>
          {displayTime(Data)}
        </Text>

        <Text style={Styles.text}>
          {StandardTime(Data.time, Data.duration)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

SmallCard.propTypes = {
  localStyles: PropTypes.object,
  displayData: PropTypes.object,
  standardTime: PropTypes.func,
  handleModalPress: PropTypes.func,
}

export default SmallCard;
