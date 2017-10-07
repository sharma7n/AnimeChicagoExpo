// import React, { Component } from 'react';
//
// import * as Keychain from 'react-native-keychain';
//
// class KeychainHandler extends Component {
//
//   static setClientKey(apiKey) {
//     debugger
//     Keychain.setGenericPassword('ClientKey', apiKey)
//       .then(() => {
//         console.log('Credentials saved successfully!');
//       });
//   }
//
//   static getClientKey() {
//     Keychain.getGenericPassword()
//       .then((credentials) => {
//         console.log('Credentials successfully loaded for user ' + credentials.username);
//       }).catch((error) => {
//         console.log(error);
//       });
//   }
//
// }
//
// export default KeychainHandler;
