import React from 'react';
import PropTypes from 'prop-types';

import EventHostsContainer from './EventHostsContainer';

const EventHostsIndex = (props) => {
  return(
    <EventHostsContainer
      eventHosts={props.eventHosts} />
  )
}

EventHostsIndex.propTypes = {
  eventHosts: PropTypes.array,
}

export default EventHostsIndex;
