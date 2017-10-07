import React from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import em from '../../lib/EmSimulator'

const {_height, width} = Dimensions.get('window')

const Styles = StyleSheet.create({
  loading: {
    height: em(5),
    width: em(5),
  },
  searchBar: {
    color: '#FFFFFF',
    fontSize: em(2),
    width: width - em(7),
    borderColor: '#FF2A67',
  },
  placeholder: {
    color: '#FF2A67',
  },
})

export default Styles;
