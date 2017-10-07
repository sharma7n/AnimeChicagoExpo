import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AdminEventContainer from './AdminEventContainer';

const AdminEventIndex = (props) => {
  return (
    <AdminEventContainer
      eventID={props.eventID} />
  );
}

AdminEventIndex.propTypes = {
  eventID: PropTypes.string,
}

export default AdminEventIndex;
