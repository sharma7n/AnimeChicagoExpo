import React from 'react';
import PropTypes from 'prop-types';

import MemberCardContainer from './MemberCardContainer';

const MemberCardIndex = (props) => {
  return(
    <MemberCardContainer
      displayData={props.displayData}
      attendanceList={props.attendanceList}
      clientKey={props.clientKey}
      eventID={props.eventID} />
  )
}

MemberCardIndex.propTypes = {
  displayData: PropTypes.object,
  attendanceList: PropTypes.array,
  clientKey: PropTypes.string,
  eventID: PropTypes.string,
}

export default MemberCardIndex;
