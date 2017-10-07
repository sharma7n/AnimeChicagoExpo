import React from 'react';
import { StyleSheet } from 'react-native';

import em from '../../lib/EmSimulator';

const Style = StyleSheet.create({
  body: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    width: em(25),
    height: em(17),
    margin: em(0.5),
  },
  text: {
    color: '#FF2A67',
    textAlign: 'center',
    fontSize: em(2),
    padding: em(0.40),
  },
})

export default Style;
