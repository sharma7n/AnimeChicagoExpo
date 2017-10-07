import React from 'react';
import PropTypes from 'prop-types';

import TabBarButton from './TabBarButton';
import LocalStyles from './styles';

const TabBarButtonContainer = (props) => {
  return(
    <TabBarButton
      localStyles={LocalStyles}
      wording={props.wording}
      icon={props.icon}
      onPress={props.onPress} />
  );
}

TabBarButtonContainer.propTypes = {
  wording: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func,
}

export default TabBarButtonContainer
