import React from 'react';
import { StyleSheet } from 'react-native';

import em from '../../lib/EmSimulator'

const Styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: em(2.5),
    color: '#46ECFF',
    marginTop: em(1.85),
    marginBottom: em(0.75)
  },
  loading: {
    height: em(5),
    width: em(5),
  },
  modal: {
    margin: em(5),
    height: em(50),
    backgroundColor: '#FFFFFF',
    borderColor: '#486ACC',
    borderWidth: em(0.25),
  },
  description: {
    fontSize: em(1.75),
    color: '#000000',
    padding: em(0.5),
    marginLeft: em(0.75),
  },
  closeButton: {
    fontSize: em(2.5),
    fontWeight: 'bold',
    paddingLeft: em(0.75),
  },
  meetupLink: {
    color: '#FF2A67',
    textAlign: 'center',
    fontSize: em(2),
    marginBottom: em(1.5),
  }
})

export default Styles;
