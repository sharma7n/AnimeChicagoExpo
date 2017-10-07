import React from 'react';
import PropTypes from 'prop-types';

import ImageButtonContainer from './ImageButtonContainer';

const ImageButtonIndex = (props) => {
  return(
    <ImageButtonContainer
      title={props.title}
      image={props.image}
      onPress={props.onPress} />
  )
}

ImageButtonIndex.propTypes = {
  title: PropTypes.string,
  image: PropTypes.number,
  onPress: PropTypes.func,
}

export default ImageButtonIndex;
