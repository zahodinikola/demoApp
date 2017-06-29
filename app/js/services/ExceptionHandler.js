'use strict';

eventsApp.factory('$exceptionHandler', 
    function() {
        return function(exeption) {
            console.log("exeption handled: " + exeption.message);
        };
    });