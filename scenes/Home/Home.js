import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  Modal,
  Linking,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';

class Home extends Component {
  constructor(props){
    super(props)

    this.yourUpcomingMeetups = this.yourUpcomingMeetups.bind(this)
    this.allUpcomingMeetups = this.allUpcomingMeetups.bind(this)
    this.chooseAllEventsView = this.chooseAllEventsView.bind(this)
    this.chooseYourEventsView = this.chooseYourEventsView.bind(this)
    this.getTempKey = this.getTempKey.bind(this)
    this.getCurrentMemberID = this.getCurrentMemberID.bind(this)
    this.pastMeetupsForToday = this.pastMeetupsForToday.bind(this)
    this.showMeetupsForToday = this.showMeetupsForToday.bind(this)
    this.setMemberID = this.setMemberID.bind(this)
    this.yourEventsModalState = this.yourEventsModalState.bind(this)
    this.allEventsModalState = this.allEventsModalState.bind(this)

    this.state = {
      yourEvents: null,
      allEvents: null,
      pastEvents: null,
      clientKey: null,
      memberID: null,
      yourEventsModal: false,
      yourEventsIndex: null,
      allEventsModal: false,
      allEventsIndex: null,
    }

    this.getTempKey();
    this.getCurrentMemberID();
  }

  yourEventsModalState(index) {
    this.setState({
      yourEventsModal: true,
      yourEventsIndex: index,
    });
  }

  allEventsModalState(index) {
    this.setState({
      allEventsModal: true,
      allEventsIndex: index,
    })
  }

  async getTempKey() {
    try {
      const key = await AsyncStorage.getItem('ClientKey');

      if (key !== null) {
        this.setState({
          clientKey: key,
        })
        this.yourUpcomingMeetups();
        this.allUpcomingMeetups();
      }
    } catch (error) {
      console.log(`Error: Did not get the key. ${error}`);
      //check errors
    }
  }

  async getCurrentMemberID() {
    try {
      const id = await AsyncStorage.getItem('MemberID');

      if (id !== null) {
        this.setState({
          memberID: id,
        })
        this.pastMeetupsForToday();
      } else {
        if (this.state.clientKey) {
          fetch(`https://api.meetup.com/members/self?&access_token=${this.state.clientKey}`, {
            method: 'GET',
          }).then((response) => {
            response.json().then((data) => {
              this.setState({
                memberID: data.id,
              })

              this.setMemberID(data.id);
              this.pastMeetupsForToday();
            })
          })
        }
      }
    } catch (error) {
      console.log(`Error: Did not get the key. ${error}`);
    }
  }

  async setMemberID(id) {
    try {
      await AsyncStorage.setItem('MemberID', `${id}`);
    } catch (error) {
      console.log(`Error: Key did not save. ${error}`);
    }
  }

  yourUpcomingMeetups() {
    if (this.state.clientKey) {
      fetch(`https://api.meetup.com/self/events?&access_token=${this.state.clientKey}&status=upcoming&fields=event_hosts,plain_text_description`, {
        method: 'GET',
      }).then((response) => {
        response.json().then((data) => {
          this.setState({
            yourEvents: data,
          })
        })
      })
    }
  }

  allUpcomingMeetups() {
    if (this.state.clientKey) {
      fetch(`https://api.meetup.com/animechicago/events?&access_token=${this.state.clientKey}&status=upcoming&fields=event_hosts,plain_text_description`, {
        method: 'GET',
      }).then((response) => {
        response.json().then((data) => {
          this.setState({
            allEvents: data,
          })
        })
      })
    }
  }

  pastMeetupsForToday() {
    if (this.state.clientKey) {
      fetch(`https://api.meetup.com/animechicago/events?&access_token=${this.state.clientKey}&page=5&desc=true&status=past`, {
        method: 'GET',
      }).then((response) => {
        response.json().then((data) => {
          this.setState({
            pastEvents: data,
          })
        })
      })
    }
  }

  chooseYourEventsView(SmallCard, LocalStyles, EventHosts, Address, ModalLine) {
    if (this.state.yourEvents) {
      return(
        <ScrollView horizontal={true}>
          {this.state.yourEvents.map((meetupEvent, index) =>
            <View key={index}>
              <SmallCard
                displayData={meetupEvent}
                handleModalPress={()=>{this.yourEventsModalState(index)}} />

              <Modal
                visible={this.state.yourEventsModal && this.state.yourEventsIndex === index}
                transparent={true}
                onRequestClose={()=>{}}>
                <ScrollView style={LocalStyles.modal}>
                  <TouchableOpacity onPress={()=>{
                    this.setState({ yourEventsModal: false, })
                  }}>
                    <Text style={LocalStyles.closeButton}>X</Text>
                  </TouchableOpacity>
                  <Address
                    venue={meetupEvent.venue} />
                  <ModalLine />
                  <EventHosts
                    eventHosts={meetupEvent.event_hosts} />
                  <ModalLine />
                  <Text style={LocalStyles.description}>
                    {meetupEvent.plain_text_description}
                  </Text>
                  <ModalLine />
                  <Text style={LocalStyles.meetupLink} onPress={()=>{Linking.openURL(meetupEvent.link)}}>
                    open on meetup.com
                  </Text>
                </ScrollView>
              </Modal>
            </View>
          )}
        </ScrollView>
      )
    } else {
      return(
        <Image
          style={LocalStyles.loading}
          source={require('../../assets/images/Ripple.gif')}/>
      )
    }
  }

  chooseAllEventsView(SmallCard, LocalStyles, EventHosts, Address, ModalLine) {
    if (this.state.allEvents) {
      return(
        <ScrollView horizontal={true}>
          {this.state.allEvents.map((meetupEvent, index) =>
            <View key={index}>
              <SmallCard
                displayData={meetupEvent}
                handleModalPress={()=>{this.allEventsModalState(index)}} />

              <Modal
                visible={this.state.allEventsModal && this.state.allEventsIndex === index}
                transparent={true}
                onRequestClose={()=>{}}>
                <ScrollView style={LocalStyles.modal}>
                  <TouchableOpacity onPress={()=>{
                    this.setState({ allEventsModal: false, })
                  }}>
                    <Text style={LocalStyles.closeButton}>X</Text>
                  </TouchableOpacity>
                  <Address
                    venue={meetupEvent.venue} />
                  <ModalLine />
                  <EventHosts
                    eventHosts={meetupEvent.event_hosts} />
                  <ModalLine />
                  <Text style={LocalStyles.description}>
                    {meetupEvent.plain_text_description}
                  </Text>
                  <ModalLine />
                  <Text style={LocalStyles.meetupLink} onPress={()=>{Linking.openURL(meetupEvent.link)}}>
                    open on meetup.com
                  </Text>
                </ScrollView>
              </Modal>
            </View>
          )}
        </ScrollView>
      )
    } else {
      return(
        <Image
          style={LocalStyles.loading}
          source={require('../../assets/images/Ripple.gif')}/>
      )
    }
  }

  showMeetupsForToday(SmallCard, LocalStyles) {
    if (this.state.memberID) {
      if (this.state.allEvents && this.state.pastEvents) {
        const todayEvents = this.parseEventsForToday()

        if(true) {
          return (
            <View>
              <Text style={LocalStyles.title}>
                Admin: Today's Events
              </Text>

              <ScrollView horizontal={true}>
                {this.state.pastEvents.map((meetupEvent, index) =>
                  <View key={index}>
                    <SmallCard
                      displayData={meetupEvent}
                      handleModalPress={
                        () => {
                          // Actions.AdminEvent({eventID: meetupEvent.id})
                          this.props.navigation.navigate('AdminEvent', {eventID: meetupEvent.id});
                        }} />
                  </View>
                )}
              </ScrollView>
            </View>
          );
        }
      } else {
        return (
          <Image
            style={LocalStyles.loading}
            source={require('../../assets/images/Ripple.gif')}/>
        );
      }
    }
  }

  parseEventsForToday() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    return this.state.allEvents.concat(this.state.pastEvents).filter((meetup) => {
      const meetupDate = new Date(meetup.time)

      return meetupDate.getDate() === day &&
        meetupDate.getMonth() === month &&
        meetupDate.getFullYear() === year
    })
  }

  render() {
    const Wrapper = this.props.wrapper;
    const LocalStyles = this.props.localStyles;
    const SmallCard = this.props.smallCard;
    const EventHosts = this.props.eventHosts;
    const Address = this.props.address;
    const ModalLine = this.props.modalLine;

    return (
      <Wrapper>
        <ScrollView>
          <Text style={LocalStyles.title}>
            Your Upcoming Events
          </Text>

          {this.chooseYourEventsView(SmallCard, LocalStyles, EventHosts, Address, ModalLine)}

          <Text style={LocalStyles.title}>
            All Upcoming Events
          </Text>

          {this.chooseAllEventsView(SmallCard, LocalStyles, EventHosts, Address, ModalLine)}

          {Object.values(this.props.admins).includes(this.state.memberID) &&
            this.showMeetupsForToday(SmallCard, LocalStyles)
          }
        </ScrollView>
      </Wrapper>
    );
  }
}

Home.propTypes = {
  localStyles: PropTypes.object,
  smallCard: PropTypes.func,
  wrapper: PropTypes.func,
  admins: PropTypes.object,
  eventHosts: PropTypes.func,
  address: PropTypes.func,
  modalLine: PropTypes.func,
}

export default Home;
