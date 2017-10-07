import React from 'react';
import PropTypes from 'prop-types';

import SmallCard from './SmallCard';
import Styles from './styles';
import StandardTime from '../../lib/StandardTime'

const SmallCardContainer = (props) => {
  return(
    <SmallCard
      localStyles={Styles}
      displayData={props.displayData}
      standardTime={StandardTime}
      handleModalPress={props.handleModalPress} />
  )
}

SmallCardContainer.propTypes = {
  displayData: PropTypes.object,
  handleModalPress: PropTypes.func,
}

export default SmallCardContainer;
