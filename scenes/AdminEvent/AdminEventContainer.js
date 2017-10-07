import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AdminEvent from './AdminEvent';
import LocalStyles from './styles';
import Wrapper from '../../layouts/Wrapper/index';
import MemberCard from '../../components/MemberCard/index';

const AdminEventContainer = (props) => {

  return (
    <AdminEvent
      wrapper={Wrapper}
      localStyles={LocalStyles}
      eventID={props.eventID}
      memberCard={MemberCard} />
  );
}

AdminEventContainer.propTypes = {
  eventID: PropTypes.string,
}

export default AdminEventContainer;
