import React from 'react';
import PropTypes from 'prop-types';

import SmallCardContainer from './SmallCardContainer';

const SmallCardIndex = (props) => {
  return(
    <SmallCardContainer
      displayData={props.displayData}
      handleModalPress={props.handleModalPress} />
  )
}

SmallCardIndex.propTypes = {
  displayData: PropTypes.object,
  handleModalPress: PropTypes.func,
}

export default SmallCardIndex;
