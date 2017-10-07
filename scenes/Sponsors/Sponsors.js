import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
  Modal,
  Linking,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

class Sponsors extends Component {
  constructor(props){
    super(props)

    this.state = {
      xuanTea: false,
      japaneseCulturalCenter: false,
      challengersComics: false,
      ardaWigs: false,
      nakamaToys: false,
    }

    this.xuanTea = this.xuanTea.bind(this)
    this.japaneseCulturalCenter = this.japaneseCulturalCenter.bind(this)
    this.challengersComics = this.challengersComics.bind(this)
    this.ardaWigs = this.ardaWigs.bind(this)
    this.nakamaToys = this.nakamaToys.bind(this)
    this.openGPS = this.openGPS.bind(this)
  }

  xuanTea() {
    this.setState({ xuanTea: true, })
  }

  japaneseCulturalCenter() {
    this.setState({ japaneseCulturalCenter: true, })
  }

  challengersComics() {
    this.setState({ challengersComics: true, })
  }

  ardaWigs() {
    this.setState({ ardaWigs: true, })
  }

  nakamaToys() {
    this.setState({ nakamaToys: true, })
  }

  openGPS(query) {
    const scheme = Platform.OS === 'ios' ? 'http://maps.apple.com/' : 'geo:0,0'
    Linking.openURL(`${scheme}?q=${query}+Chicago+Illinois`)
  }

  render() {
    const Wrapper = this.props.wrapper;
    const LocalStyles = this.props.localStyles;

    return (
      <Wrapper>
        <ScrollView>

          <TouchableOpacity onPress={this.xuanTea}>
            <Image
              style={LocalStyles.xuanTea}
              source={require('../../assets/images/sponsors/xuan_tea.png')}/>
          </TouchableOpacity>
          <Modal
            visible={this.state.xuanTea}
            transparent={true}
            onRequestClose={()=>{}}>
            <View style={LocalStyles.modal}>
              <TouchableOpacity onPress={()=>{
                this.setState({ xuanTea: false, })
              }}>
                <Text style={LocalStyles.closeButton}>X</Text>
              </TouchableOpacity>
              <Text style={LocalStyles.header}>Xuan Tea</Text>
              <Text style={LocalStyles.description}>
                A unique tea bar experience with authentic Chinese loose-leaf and Japanese Matcha.
              </Text>
              <Text style={LocalStyles.promo}>
                Visit our tea partner for occasional promo deals! Their Matcha is delicious!
              </Text>
              <TouchableOpacity onPress={()=>this.openGPS('Xuan+Tea')}>
                <Text style={LocalStyles.address}>
                  1816 N Milwaukee Ave, Chicago, IL 60647
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={LocalStyles.website} onPress={()=>{Linking.openURL('http://www.xuantea.com/')}}>
                  xuantea.com
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <TouchableOpacity onPress={this.japaneseCulturalCenter}>
            <Image
              style={LocalStyles.japaneseCulturalCenter}
              source={require('../../assets/images/sponsors/japanese_cultural_center.jpg')}/>
          </TouchableOpacity>
          <Modal
            visible={this.state.japaneseCulturalCenter}
            transparent={true}
            onRequestClose={()=>{}}>
            <View style={LocalStyles.modal}>
              <TouchableOpacity onPress={()=>{
                this.setState({ japaneseCulturalCenter: false, })
              }}>
                <Text style={LocalStyles.closeButton}>
                  X
                </Text>
              </TouchableOpacity>
              <Text style={LocalStyles.header}>Japanese Cultural Center</Text>
              <Text style={LocalStyles.description}>
                The Japanese Culture Center provides an environment to be immersed and experience Japan’s cultural and marital arts.
              </Text>
              <Text style={LocalStyles.promo}>
                20% discount on all classes!
              </Text>
              <TouchableOpacity onPress={()=>this.openGPS('Japanese+Cultural+Center')}>
                <Text style={LocalStyles.address}>
                  1016 W Belmont Ave, Chicago, IL 60657
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={LocalStyles.website} onPress={()=>{Linking.openURL('http://www.japaneseculturecenter.com/')}}>
                  japaneseculturecenter.com
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <TouchableOpacity onPress={this.challengersComics}>
            <Image
              style={LocalStyles.challengersComics}
              source={require('../../assets/images/sponsors/challengers_comics.jpg')}/>
          </TouchableOpacity>
          <Modal
            visible={this.state.challengersComics}
            transparent={true}
            onRequestClose={()=>{}}>
            <View style={LocalStyles.modal}>
              <TouchableOpacity onPress={()=>{
                this.setState({ challengersComics: false, })
              }}>
                <Text style={LocalStyles.closeButton}>
                  X
                </Text>
              </TouchableOpacity>
              <Text style={LocalStyles.header}>Challengers Comics</Text>
              <Text style={LocalStyles.description}>
                comics + conversation
              </Text>
              <Text style={LocalStyles.promo}>
                20% discount on our Manga Jam selection of the month!
              </Text>
              <TouchableOpacity onPress={()=>this.openGPS('Challengers Comics')}>
                <Text style={LocalStyles.address}>
                  1845 N Western Ave, Chicago, IL 60647
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={LocalStyles.website} onPress={()=>{Linking.openURL('http://challengerscomics.com/')}}>
                  challengerscomics.com
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <TouchableOpacity onPress={this.ardaWigs}>
            <Image
              style={LocalStyles.ardaWigs}
              source={require('../../assets/images/sponsors/arda_wigs.jpg')}/>
          </TouchableOpacity>
          <Modal
            visible={this.state.ardaWigs}
            transparent={true}
            onRequestClose={()=>{}}>
            <View style={LocalStyles.modal}>
              <TouchableOpacity onPress={()=>{
                this.setState({ ardaWigs: false, })
              }}>
                <Text style={LocalStyles.closeButton}>
                  X
                </Text>
              </TouchableOpacity>
              <Text style={LocalStyles.header}>Arda Wigs</Text>
              <Text style={LocalStyles.description}>
                We are dedicated to bringing cosplayers and wig enthusiasts wig styles wearable on any head type, as well as being realistic and easy to style.
              </Text>
              <Text style={LocalStyles.promo}>
                Our cosplay partner offers occasional promo deals!
              </Text>
              <TouchableOpacity onPress={()=>this.openGPS('Arda Wigs')}>
                <Text style={LocalStyles.address}>
                  1624 W Carroll Ave, Chicago, IL 60612
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={LocalStyles.website} onPress={()=>{Linking.openURL('https://www.arda-wigs.com/')}}>
                  arda-wigs.com
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <TouchableOpacity onPress={this.nakamaToys}>
            <Image
              style={LocalStyles.nakamaToys}
              source={require('../../assets/images/sponsors/nakama_toys.jpg')}/>
          </TouchableOpacity>
          <Modal
            visible={this.state.nakamaToys}
            transparent={true}
            onRequestClose={()=>{}}>
            <View style={LocalStyles.modal}>
              <TouchableOpacity onPress={()=>{
                this.setState({ nakamaToys: false, })
              }}>
                <Text style={LocalStyles.closeButton}>
                  X
                </Text>
              </TouchableOpacity>
              <Text style={LocalStyles.header}>Nakama Toys</Text>
              <Text style={LocalStyles.description}>
                We chose the name "Nakama" because it means friendship in Japanese, a theme we attempt to replicate with each customer.
              </Text>
              <Text style={LocalStyles.promo}>
                Buy 3 gashapon – get 1 free!
              </Text>
              <TouchableOpacity onPress={()=>this.openGPS('Nakama Toys')}>
                <Text style={LocalStyles.address}>
                  2504 N California Ave, Chicago, IL 60647
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={LocalStyles.website} onPress={()=>{Linking.openURL('https://www.nakamatoys.com/')}}>
                  nakamatoys.com
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>

        </ScrollView>
      </Wrapper>
    )
  }
}

Sponsors.propTypes = {
  localStyles: PropTypes.object,
  wrapper: PropTypes.func,
}

export default Sponsors;
