import React from 'react';
import { StyleSheet } from 'react-native';

import em from '../../lib/EmSimulator';

const Styles = StyleSheet.create({
  modal: {
    margin: em(5),
    height: em(50),
    backgroundColor: '#FFFFFF',
    borderColor: '#486ACC',
    borderWidth: em(0.25),
  },
  closeButton: {
    fontSize: em(2.5),
    fontWeight: 'bold',
    paddingLeft: em(0.75),
  },
  header: {
    fontSize: em(3),
    textAlign: 'center',
    color: '#000000',
    padding: em(0.5),
  },
  description: {
    fontSize: em(1.5),
    textAlign: 'center',
    color: '#000000',
    padding: em(0.5),
  },
  promo: {
    textAlign: 'center',
    fontSize: em(2),
    color: '#000000',
    padding: em(0.5),
    paddingLeft: em(2),
    paddingRight: em(0.5),
    paddingTop: em(5),
    paddingBottom: em(5),
  },
  address: {
    fontSize: em(2),
    textAlign: 'center',
    color: '#FF2A67',
    padding: em(0.5),
  },
  website: {
    fontSize: em(1.5),
    textAlign: 'center',
    color: '#FF2A67',
    padding: em(0.5),
  },
  xuanTea: {
    height: em(30),
    width: em(30),
    margin: em(1),
    resizeMode: 'contain',
  },
  japaneseCulturalCenter: {
    height: em(42),
    width: em(30),
    margin: em(1),
    resizeMode: 'contain',
  },
  challengersComics: {
    height: em(12),
    width: em(30),
    margin: em(1),
    resizeMode: 'contain',
  },
  ardaWigs: {
    height: em(14),
    width: em(30),
    margin: em(1),
    resizeMode: 'contain',
  },
  nakamaToys: {
    height: em(30),
    width: em(30),
    margin: em(1),
    resizeMode: 'contain',
  },
})

export default Styles;
