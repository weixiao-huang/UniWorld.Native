const apn = require('apn');
const path = require('path');

const apnConnection = new apn.Connection({
  production: false,
  cert: path.join(__dirname, 'cert.pem'),  // path to cert.pem file
  key: path.join(__dirname, 'key.pem'),   // path to key.pem file
});

/**
 *  Create a apn instance.
 *  @param {String} - device_token
 *  @return {Object} - new instance object
**/

function getNewApnInstance(device_token) {
  return {
    device: new apn.Device(device_token),
    note: new apn.Notification(),
  };
}

/**
 *  Send notification to a specific device identified by the device token
 *  @param (Function) - callback
 *
**/
function sendNotification(device_token) {
  const instance = getNewApnInstance(device_token);

  instance.note.alert = 'You have a new  push notification!';
  instance.note.payload = { text: 'Message from Joe Bloggs' };

  apnConnection.pushNotification(instance.note, instance.device);

  apnConnection.on('transmitted', function (notification, device) {
    console.log('on.transmitted', arguments);
  });

  apnConnection.on('transmissionError', function (errorCode, notification, device) {
    console.log('on.transmissionError', arguments);
  });
}

module.exports = {
  sendNotification,
}
