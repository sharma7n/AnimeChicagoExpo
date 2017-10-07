import React from 'react';
import PropTypes from 'prop-types';

import MemberCard from './MemberCard';
import Styles from './styles';
import Constants from '../../config/constants';

const MemberCardContainer = (props) => {
  const constants = new Constants();
  const groupID = constants.animeChicagoGroupID();

  return(
    <MemberCard
      localStyles={Styles}
      displayData={props.displayData}
      attendanceList={props.attendanceList}
      clientKey={props.clientKey}
      groupID={groupID}
      eventID={props.eventID} />
  )
}

MemberCardContainer.propTypes = {
  displayData: PropTypes.object,
  attendanceList: PropTypes.array,
  clientKey: PropTypes.string,
  eventID: PropTypes.string,
}

export default MemberCardContainer;
