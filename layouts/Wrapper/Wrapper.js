import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  StatusBar,
  View,
} from 'react-native';

const Wrapper = (props) => {
  const GlobalStyles = props.globalStyles;
  const TabBar = props.tabBar;
  const TabBarButton = props.tabBarButton;

  return (
    <View>
      <StatusBar translucent={true} backgroundColor={'transparent'} />

      <ScrollView>
        <View style={GlobalStyles.container}>
          {props.children}
        </View>
      </ScrollView>
    </View>
  );
};

Wrapper.propTypes = {
  globalStyles: PropTypes.object,
};

export default Wrapper;
