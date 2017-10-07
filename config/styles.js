import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

import em from '../lib/EmSimulator';

const screenHeight = Dimensions.get('window').height;
const paddingNavBarTopForOS = Platform.OS === 'android' ? em(0.5) : 0;
const paddingContainerTopForOS = Platform.OS === 'ios' ? em(7) : em(5);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B4052',
    height: screenHeight,
    paddingTop: paddingContainerTopForOS,
    paddingBottom: em(4),
  },
  navBar: {
    backgroundColor: '#486ACC',
    paddingTop: paddingNavBarTopForOS,
  },
  navBarTitle: {
    color: '#000000',
  },
  navbarIcons: {
    tintColor: '#000000',
  },
});

export default Styles;
