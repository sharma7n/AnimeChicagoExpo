import React from 'react';
import { StyleSheet } from 'react-native';

import em from '../../lib/EmSimulator';

const Style = StyleSheet.create({
  line: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    width: em(25),
    height: em(0.1),
    margin: em(1),
  },
})

export default Style;
