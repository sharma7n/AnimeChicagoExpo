import React from 'react';
import { StyleSheet } from 'react-native';

import em from '../../lib/EmSimulator'

const Styles = StyleSheet.create({
  welcome: {
    textAlign: 'center',
    fontSize: em(4.5),
    fontWeight: 'bold',
    color: '#46ECFF',
    marginBottom: em(2.85),
  },
  crest: {
    height: em(22.01),
    width: em(22.01),
    marginBottom: em(3.75),
  },
  buttons: {
    flexDirection: 'row',
  }
})

export default Styles;
