import React from 'react';
import { StyleSheet } from 'react-native';

import em from '../../lib/EmSimulator';

const Style = StyleSheet.create({
  body: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    width: em(35),
    height: em(15),
    margin: em(0.5),
    flexDirection: 'row',
  },
  textColumn: {
    flexDirection: 'column',
  },
  text: {
    color: '#FFFFFF',
    marginBottom: em(1),
  },
  info: {
    color: '#46ECFF',
    marginLeft: em(0.5),
  },
  guestInput: {
    color: '#46ECFF',
    marginLeft: em(0.5),
    height: em(4),
    borderColor: '#FF2A67',
  },
  infoRow: {
    flexDirection: 'row',
  },
  switchText: {
    color: '#FF2A67',
    marginRight: em(1),
    marginBottom: em(2),
  },
  statusRow: {
    flexDirection: 'row',
  },
  switchColumn: {
    flexDirection: 'column',
    marginLeft: em(1.25),
  },
  switchRow: {
    flexDirection: 'row',
  },
  name: {
    color: '#46ECFF',
    fontSize: em(2),
    padding: em(0.40),
  },
  image: {
    width: em(11),
    height: em(11),
    resizeMode: 'contain',
    margin: em(1),
    borderRadius: em(0.25),
  },
  loading: {
    height: em(5),
    width: em(5),
  },
})

export default Style;
