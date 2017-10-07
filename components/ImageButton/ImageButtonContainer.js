import React from 'react';
import PropTypes from 'prop-types';

import ImageButton from './ImageButton';
import Styles from './styles';

const ImageButtonContainer = (props) => {
  return(
    <ImageButton
      localStyles={Styles}
      title={props.title}
      image={props.image}
      onPress={props.onPress} />
  )
}

ImageButtonContainer.propTypes = {
  title: PropTypes.string,
  image: PropTypes.number,
  onPress: PropTypes.func,
}

export default ImageButtonContainer;
