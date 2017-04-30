'use strict'

eventsApp.controller("EventController", 
    function EventController($scope){

        $scope.snippet = '<span style="color: red"> hi there </span>';
        $scope.boolValue = false;
        $scope.mystyle = {color: 'red'};
        $scope.myclass = "cyan";
        $scope.buttonDisabled = true;
        $scope.event = {
            name: "Angular Boot Camp",
            date: "1/1/2013",
            time: "10:30 am",
            location: {
                address: "Google Headquarters",
                city: "Mountain View",
                province: "CA"
            },
            imageUrl: "./img/angularjs-logo.png",
            sessions: [
                {
                    name: "Directives masterclass",
                    creatorName: "Bob Smith",
                    duration: "1 hr",
                    level: "Advanced",
                    abstract: "In this session you will learn the ins and outs of direct....",
                    upVoteCount: 0
                },
                {
                    name: "Scopes for fun and profit",
                    creatorName: "John Doe",
                    duration: "30 mins",
                    level: "Introductory",
                    abstract: "This session will take a closer look at scopes. Learn.....",
                    upVoteCount: 0
                },
                {
                    name: "Well behaved controllers",
                    creatorName: "Jane Doe",
                    duration: "2 hours",
                    level: "Intermediate",
                    abstract: "Controllers are the beginning if everything Angular does.....",
                    upVoteCount: 0
                }
            ] 
        };
        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
            }
        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        }
    }
);