/*

This class acts as an interface to the meetup API functions.

The realApi implements actual HTTP requests, while the mockApi fakes requests.

*/

import realApi from './meetupApi';
import mockApi from './mockMeetupApi';

import constants from '../config/constants';


class Api {
    
    constructor() {
        this.service = constants.currentConfig() === constants.prodConfig() ? realApi : mockApi;
        this.service.bind(this);
    }
    
    postAttendance() { return this.service.postAttendance(); }
    getMeetupList() { return this.service.getMeetupList(); }
    
}

export default Api;