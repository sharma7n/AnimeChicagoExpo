import React from 'react';
import { StyleSheet } from 'react-native';

import em from '../../lib/EmSimulator';

const Style = StyleSheet.create({
  container: {
    marginLeft: em(0.75),
  },
  header: {
    fontSize: em(1.75),
    color: '#000000',
    paddingBottom: em(1.5),
  },
  name: {
    fontSize: em(1.5),
    color: '#242E75',
    textAlign: 'center',
    marginTop: em(2),
  },
  image: {
    width: em(8),
    height: em(8),
    resizeMode: 'contain',
    marginRight: em(1),
    marginLeft: em(0.5),
    marginTop: em(0.5),
    borderRadius: em(0.25),
  },
  imageRow: {
    flexDirection: 'row',
  },
})

export default Style;
