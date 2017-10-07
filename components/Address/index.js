import React from 'react';
import PropTypes from 'prop-types';

import AddressContainer from './AddressContainer';

const AddressIndex = (props) => {
  return(
    <AddressContainer
      venue={props.venue} />
  )
}

AddressIndex.propTypes = {
  venue: PropTypes.object,
}

export default AddressIndex;
