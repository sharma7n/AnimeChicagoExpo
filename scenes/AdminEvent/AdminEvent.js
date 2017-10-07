import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
  ScrollView,
  AsyncStorage,
  TextInput,
} from 'react-native';

class AdminEvent extends Component {
  constructor(props){
    super(props)

    this.getTempKey = this.getTempKey.bind(this);
    this.getEventRsvps = this.getEventRsvps.bind(this);
    this.attendanceListView = this.attendanceListView.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      clientKey: null,
      rsvps: null,
      // attendance: null,
    }

    this.getTempKey();
    // this.getAttendanceStorage();
  }

  async getTempKey() {
    try {
      const key = await AsyncStorage.getItem('ClientKey');

      if (key !== null) {
        this.setState({
          clientKey: key,
        })
        this.getEventRsvps();
      }
    } catch (error) {
      console.log(`Error: Did not get the key. ${error}`);
      //check errors
    }
  }

  // async getAttendanceStorage() {
  //   try {
  //     const array = await AsyncStorage.getItem(`${this.props.eventID}-Attendance`);
  //
  //     if (array !== null) {
  //       this.setState({
  //         attendance: array,
  //       })
  //     } else {
  //       this.setState({
  //         attendance: [],
  //       })
  //     }
  //   } catch(error) {
  //     console.log(`Error: Did not get the attendance records. ${error}`);
  //   }
  // }

  getEventRsvps() {
    if (this.state.clientKey) {
      fetch(`https://api.meetup.com/animechicago/events/${this.props.eventID}/rsvps?&access_token=${this.state.clientKey}&fields=attendance_status`, {
        method: 'GET',
      }).then((response) => {
        response.json().then((data) => {
          this.rsvpConstantList = data;
          this.setState({
            rsvps: data,
          })
        })
      })
    }
  }

  attendanceListView(LocalStyles, MemberCard) {
    // if (this.state.rsvps && this.state.attendance) {
    if (this.state.rsvps) {
      return(
        <ScrollView>
          {this.state.rsvps.map((rsvp, index) =>
            <View key={index}>
              <MemberCard
                displayData={rsvp}
                clientKey={this.state.clientKey}
                eventID={this.props.eventID} />
            </View>
          )}
        </ScrollView>
      );
    } else {
      return(
        <Image
          style={LocalStyles.loading}
          source={require('../../assets/images/Ripple.gif')}/>
      );
    }
  }

  handleSearch(text) {
    console.log(text)
    const filtered = this.rsvpConstantList.filter((person) => {
      return person.member.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
    })
    this.setState({
      rsvps: filtered,
    })
  }

  render() {
    const LocalStyles = this.props.localStyles;
    const Wrapper = this.props.wrapper;
    const MemberCard = this.props.memberCard;

    return (
      <Wrapper>
        <TextInput
          style={LocalStyles.searchBar}
          placeholder={'search'}
          placeholderTextColor={'#FF2A67'}
          onChangeText={(text) => {this.handleSearch(text)}} />

        {this.attendanceListView(LocalStyles, MemberCard)}
      </Wrapper>
    );
  }
}

AdminEvent.propTypes = {
  wrapper: PropTypes.func,
  localStyles: PropTypes.object,
  eventID: PropTypes.string,
  memberCard: PropTypes.func,
}

export default AdminEvent;
