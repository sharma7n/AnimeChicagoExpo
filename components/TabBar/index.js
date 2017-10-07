import React from 'react';

import TabBarContainer from './TabBarContainer';

const TabBarIndex = (props) => {
  return(
    <TabBarContainer>
      {props.children}
    </TabBarContainer>
  );
}

TabBarIndex.propTypes = {
}

export default TabBarIndex;
