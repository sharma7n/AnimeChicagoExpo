import React from 'react';
import {
  StyleSheet,
  // Dimensions,
} from 'react-native';

import em from '../../lib/EmSimulator';

// let width = null;
// Dimensions.addEventListener('change', (dimensions) => {
//   dimensions.window.width;
// })

const Style = StyleSheet.create({
  bar: {
    backgroundColor: '#486ACC',
    height: em(4),
    // width: width,
    position: 'absolute',
    justifyContent: 'flex-end',
    bottom: 0,
    right: 0,
    left: 0,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default Style;
