'use strict';

var Alexa = require('alexa-sdk');
var constants = require('./constants');
var stateHandlers = require('./stateHandlers');
var audioEventHandlers = require('./audioEventHandlers');

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.appId = constants.appId;
    alexa.dynamoDBTableName = constants.dynamoDBTableName;
    alexa.registerHandlers(
        stateHandlers.startModeIntentHandlers,
        stateHandlers.playModeIntentHandlers,
        stateHandlers.remoteControllerHandlers,
        stateHandlers.resumeDecisionModeIntentHandlers,
        audioEventHandlers
    );

    alexa.execute();
    //No clue what goes on down here, but it wasn't working.
    // if (event.context.System.device.supportedInterfaces.AudioPlayer === undefined) {
    //     alexa.emit(':tell', 'Sorry, this skill is not supported on this device');
    // }
    // else {
    //     alexa.execute();
    // }
};
