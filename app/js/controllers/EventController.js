'use strict'

eventsApp.controller("EventController", 
    function EventController($scope, eventData) {

        $scope.orderby = "name";
        $scope.snippet = '<span style="color: red"> hi there </span>';
        $scope.boolValue = false;
        $scope.mystyle = {color: 'red'};
        $scope.myclass = "cyan";
        $scope.buttonDisabled = true;
        eventData.getEvent(function(event) {
                $scope.event = event;
            });
        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
            }
        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        }
    }
);