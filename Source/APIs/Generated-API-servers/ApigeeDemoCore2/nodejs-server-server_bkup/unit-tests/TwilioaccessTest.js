
'use strict';
// App imports
const twilioaccess = require('../data-access/Twilioaccess');

function testTwilioCall() {
    var resource_uri = '/sms/'+ '60888274';
    var options = {
      method: 'GET'
    }

    twilioaccess.twilioCall(resource_uri, options, function (err, data) {
        console.log(err);
        console.log(data);
    });
}

testTwilioCall();