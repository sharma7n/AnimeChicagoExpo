import React from 'react';
import PropTypes from 'prop-types';

import Address from './Address';
import Styles from './styles';

const AddressContainer = (props) => {
  return(
    <Address
      venue={props.venue}
      localStyles={Styles} />
  )
}

AddressContainer.propTypes = {
  venue: PropTypes.object,
}

export default AddressContainer;
