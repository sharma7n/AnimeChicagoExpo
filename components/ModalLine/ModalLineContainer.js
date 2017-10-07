import React from 'react';
import PropTypes from 'prop-types';

import ModalLine from './ModalLine';
import Styles from './styles';

const ModalLineContainer = (props) => {
  return(
    <ModalLine
      localStyles={Styles} />
  )
}

export default ModalLineContainer;
