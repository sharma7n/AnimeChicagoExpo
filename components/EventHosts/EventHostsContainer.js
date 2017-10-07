import React from 'react';
import PropTypes from 'prop-types';

import EventHosts from './EventHosts';
import Styles from './styles';

const EventHostsContainer = (props) => {
  return(
    <EventHosts
      eventHosts={props.eventHosts}
      localStyles={Styles} />
  )
}

EventHostsContainer.propTypes = {
  eventHosts: PropTypes.array,
}

export default EventHostsContainer;
