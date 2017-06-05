'use strict'

eventsApp.controller('EventController',
        function EventController($scope) {

            $scope.snippet = "<span style='color: red'>hi there</span>";
            $scope.boolValue = false;
            $scope.mystyle = {color: "red"};
            $scope.myclass = "blue";
            $scope.sortOrder = 'upVoteCount';
            $scope.buttonDisabled = true;

            $scope.event = {
                name: "Angular Boot Camp",
                date: "1/1/2013",
                time: "10:30 am",
                location: {
                    address: "Google Headquarter",
                    city: "Mountain View",
                    province: "CA"
                },
                imageUrl: './img/angularjs-logo.png',
                sessions: [
                    {
                        name: "Directives Masterclass Introductory",
                        creatorName: "Bob Smith",
                        duration: 1,
                        level: "advanced",
                        abstract: "In this session you will learn ins and outs of direc...",
                        upVoteCount: 0
                    },
                    {
                        name: "Scopes for fun and profit",
                        creatorName: "John Doe",
                        duration: 2,
                        level: "Introductory",
                        abstract: "This session will take a closer look at scopes. Learn...",
                        upVoteCount: 0
                    },
                    {
                        name: "Well Behaved Controllers",
                        creatorName: "Jane Doe",
                        duration: 4,
                        level: "Intermediate",
                        abstract: "Controllers are the beginning of everything Angular does...",
                        upVoteCount: 0
                    }
                ]
            }
            
            $scope.upVoteSession = function(session) {
                    session.upVoteCount++;
                }
            $scope.downVoteSession = function(session) {
                    session.upVoteCount--;
            }
        })
// eventsApp.controller("EventController",
//     function EventController($scope, eventData, $log) {

//         $scope.orderby = "name";
//         $scope.snippet = '<span style="color: red"> hi there </span>';
//         $scope.boolValue = false;
//         $scope.mystyle = { color: 'red' };
//         $scope.myclass = "cyan";
//         $scope.buttonDisabled = true;
//         eventData.getEvent()
//             .success(function(event) {$scope.event = event; })
//             .error(function(data, status, headers, config) {
//                     $log.warn(data, status, headers(), config);
//                 });
        
//         $scope.upVoteSession = function (session) {
//             session.upVoteCount++;
//         }
//         $scope.downVoteSession = function (session) {
//             session.upVoteCount--;
//         }
//     }
// );