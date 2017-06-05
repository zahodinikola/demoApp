eventsApp.factory("eventData", function($http) {
    return {
        getEvent: function() {
            return $http({method: 'GET', url: '../app/data/event/1'});
        }
    };
});