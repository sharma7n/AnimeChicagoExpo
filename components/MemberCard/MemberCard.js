import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
  Switch,
  TextInput,
} from 'react-native';

class MemberCard extends Component {
  constructor(props){
    super(props)

    // this.mergedData = this.mergedData.bind(this);
    // this.getMemberDuesInfo = this.getMemberDuesInfo.bind(this);
    this.memberCardView = this.memberCardView.bind(this);
    this.handleSwitchValue = this.handleSwitchValue.bind(this);
    this.editGuests = this.editGuests.bind(this);

    this.state = {
      // dues: null,
      attended: this.props.displayData.attendance_status === 'attended',
      absent: this.props.displayData.attendance_status === 'absent',
      noshow: this.props.displayData.attendance_status === 'noshow',
      guests: this.props.displayData.guests,
    }
    // this.getMemberDuesInfo();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      attended: nextProps.displayData.attendance_status === 'attended',
      absent: nextProps.displayData.attendance_status === 'absent',
      noshow: nextProps.displayData.attendance_status === 'noshow',
      guests: nextProps.displayData.guests,
    })
  }

  // getMemberDuesInfo() {
  //   const groupID = this.props.groupID;
  //   const memberID = this.props.displayData.id;
  //   const clientKey = this.props.clientKey;
  //
  //   fetch(`https://api.meetup.com/2/profile/${groupID}/${memberID}?&access_token=${clientKey}&fields=membership_dues`, {
  //     method: 'GET',
  //   }).then((response) => {
  //     response.json().then((data) => {
  //       this.setState({
  //         dues: data,
  //       })
  //     })
  //   })
  // }

  // mergedData(Data) {
  //   if (Data["cache"]) {
  //     return Data;
  //   } else {
  //     Data["cache"] = true;
  //     this.props.attendanceList.forEach((person) => {
  //       if (person.id === Data.id) {
  //         Data["status"] = person.status;
  //       }
  //     });
  //     return Data;
  //   }
  // }

  handleSwitchValue(value, type) {
    this.setState({
      attended: type === 'attended' ? value : false,
      absent: type === 'absent' ? value : false,
      noshow: type === 'noshow' ? value : false,
      disabled: true,
    })

    fetch(`https://api.meetup.com/animechicago/events/${this.props.eventID}/attendance`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.props.clientKey}`
      }),
      body: JSON.stringify({
        guests: this.state.guests,
        headcount: this.state.guests + 1,
        member: this.props.displayData.member.id,
        status: type,
      }),
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
      })
    })
  }

  editGuests(text) {
    this.setState({
      guests: text,
    })
  }

  memberCardView(Styles, Data) {
    // if (this.state.dues) {
      return(
        <View style={Styles.body}>
          <Image
            style={Styles.image}
            source={{uri: Data.member.photo.photo_link}} />

          <View style={Styles.textColumn}>
            <Text style={Styles.name}>
              {Data.member.name}
            </Text>

            <View style={Styles.statusRow}>

              <View style={Styles.rsvpColumn}>
                <View style={Styles.infoRow}>
                  <Text style={Styles.text}>
                    RSVP:
                  </Text>
                  <Text style={Styles.info}>
                    {Data.response}
                  </Text>
                </View>

                <View style={Styles.infoRow}>
                  <Text style={Styles.text}>
                    Guest #:
                  </Text>
                  <TextInput
                    style={Styles.guestInput}
                    value={this.state.guests.toString()}
                    onChangeText={(text) => {this.editGuests(text)}}
                    keyboardType='numeric' />
                </View>
              </View>

              <View style={Styles.switchColumn}>
                <View style={Styles.switchRow}>
                  <Text style={Styles.switchText}>Attended</Text>
                  <Switch
                    value={this.state.attended}
                    onValueChange={()=>{this.handleSwitchValue(!this.state.attended, 'attended')}}
                    disabled={this.state.attended} />
                </View>
                <View style={Styles.switchRow}>
                  <Text style={Styles.switchText}>Absent</Text>
                  <Switch
                    value={this.state.absent}
                    onValueChange={()=>{this.handleSwitchValue(!this.state.absent, 'absent')}}
                    disabled={this.state.absent} />
                </View>
                <View style={Styles.switchRow}>
                  <Text style={Styles.switchText}>No Show</Text>
                  <Switch
                    value={this.state.noshow}
                    onValueChange={()=>{this.handleSwitchValue(!this.state.noshow, 'noshow')}}
                    disabled={this.state.noshow} />
                </View>
              </View>

            </View>

          </View>

        </View>
      );
  }

  render() {
    const Styles = this.props.localStyles;
    const Data = this.props.displayData;

    return(
      this.memberCardView(Styles, Data)
    );
  }
}

MemberCard.propTypes = {
  localStyles: PropTypes.object,
  displayData: PropTypes.object,
  // attendanceList: PropTypes.array,
  clientKey: PropTypes.string,
  // groupID: PropTypes.string,
  eventID: PropTypes.string,
}

export default MemberCard;
