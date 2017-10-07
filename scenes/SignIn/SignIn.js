import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
  Linking,
  AsyncStorage,
} from 'react-native';

class SignIn extends Component {
  constructor(props){
    super(props)

    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSkipSignIn = this.handleSkipSignIn.bind(this)
    this.handleQueryParams = this.handleQueryParams.bind(this)
    this.setTempKey = this.setTempKey.bind(this)
  }

  handleSignIn() {
    Linking.openURL(`https://secure.meetup.com/oauth2/authorize?client_id=${this.props.meetup.key}&response_type=token&redirect_uri=${this.props.meetup.uri}&set_mobile=${this.props.meetup.mobile}`);
  }

  handleSkipSignIn() {
    // Actions.Home()
    this.props.navigation.navigate('Home');
  }

  componentDidMount() {
    Linking.addEventListener('url', this.handleQueryParams);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleQueryParams);
  }

  handleQueryParams(event) {
    urlKeyRegex = /animechicago:\/\/com\.animechicago#access_token=([0-9a-zA-Z]+)&token_type=bearer&expires_in=(\d+)/;
    const matchGroups = urlKeyRegex.exec(event.url);

    this.setTempKey(matchGroups[1])
  }

  async setTempKey(key) {
    try {
      await AsyncStorage.setItem('ClientKey', `${key}`);
    } catch (error) {
      console.log(`Error: Key did not save. ${error}`);
    }
  }

  render() {
    const LocalStyles = this.props.localStyles;
    const ImageButton = this.props.imageButton;
    const Wrapper = this.props.wrapper;

    return (
      <Wrapper>
        <Text style={LocalStyles.welcome}>
          AnimeChicago
        </Text>

        <Image
          style={LocalStyles.crest}
          source={require('../../assets/images/crest.png')} />

        <View style={LocalStyles.buttons}>

          <ImageButton
            title={"Sign In"}
            image={require('../../assets/images/meetup-media.png')}
            onPress={this.handleSignIn} />

          <ImageButton
            title={"Explore"}
            image={require('../../assets/images/arrow-right.png')}
            onPress={this.handleSkipSignIn} />

        </View>
      </Wrapper>
    );
  }
}

SignIn.propTypes = {
  wrapper: PropTypes.func,
  localStyles: PropTypes.object,
  imageButton: PropTypes.func,
  meetup: PropTypes.object,
}

export default SignIn;
