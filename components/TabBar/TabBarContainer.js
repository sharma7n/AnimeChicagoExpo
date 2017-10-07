import React from 'react';

import TabBar from './TabBar';
import LocalStyles from './styles';

const TabBarContainer = (props) => {
  return(
    <TabBar
      localStyles={LocalStyles} >

      {props.children}

    </TabBar>
  );
}

TabBarContainer.propTypes = {
}

export default TabBarContainer;
