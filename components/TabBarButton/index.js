import React from 'react';
import PropTypes from 'prop-types';

import TabBarButtonContainer from './TabBarButtonContainer';

const TabBarButtonIndex = (props) => {
  return(
    <TabBarButtonContainer
      wording={props.wording}
      icon={props.icon}
      onPress={props.onPress} />
  );
}

TabBarButtonIndex.propTypes = {
  wording: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func,
}

export default TabBarButtonIndex;
