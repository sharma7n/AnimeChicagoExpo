import React from 'react';
import { StyleSheet } from 'react-native';

import em from '../../lib/EmSimulator';

const Style = StyleSheet.create({
  address: {
    fontSize: em(2),
    textAlign: 'center',
    color: '#FF2A67',
    padding: em(0.5),
    marginBottom: em(0.5),
  },
  name: {
    fontSize: em(2.5),
    color: '#242E75',
    textAlign: 'center',
  },
})

export default Style;
