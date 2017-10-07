import React from 'react';
import { StyleSheet } from 'react-native';

import em from '../../lib/EmSimulator';

const Style = StyleSheet.create({
  view: {
    flexDirection: 'column',
  },
  image: {
    height: em(7.5),
    width: em(7.5),
    margin: em(2.5),
  },
  text: {
    color: '#FF2A67',
    fontFamily: 'open-sans-light',
    fontWeight: 'bold',
    fontSize: em(2),
    textAlign: 'center',
    margin: em(0.5),
  },
})

export default Style;
