'use strict'

eventsApp.controller('EventController',
        function EventController($scope, eventData, $log) {

            $scope.snippet = "<span style='color: red'>hi there</span>";
            $scope.boolValue = false;
            $scope.mystyle = {color: "red"};
            $scope.myclass = "blue";
            $scope.sortOrder = 'upVoteCount';
            $scope.buttonDisabled = true;
            
            eventData.getEvent()
                .success(function(event) {
                        $scope.event = event;
                })
                .error(function(data, status, headers, config) {
                        $log.warn(data, status, headers(), config);
                });
        

            $scope.upVoteSession = function(session) {
                    session.upVoteCount++;
                };
            $scope.downVoteSession = function(session) {
                    session.upVoteCount--;
                };
        })
