import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Keyboard,
} from 'react-native';

class TabBar extends Component {
  constructor(props) {
    super(props)

    this.handleKeyboard = this.handleKeyboard.bind(this);

    this.state = {
      noKeyboard: true,
    }
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', ()=>{this.handleKeyboard(false)});
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', ()=>{this.handleKeyboard(true)});
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  handleKeyboard(boolean) {
    this.setState({
      noKeyboard: boolean,
    })
  }

  render() {
    const LocalStyles = this.props.localStyles;

    return(
      this.state.noKeyboard &&
        <View style={LocalStyles.bar}>

          <View style={LocalStyles.buttons}>
            {this.props.children}
          </View>

        </View>
    );
  }
}


TabBar.propTypes = {
  localStyles: PropTypes.object,
}

export default TabBar;
