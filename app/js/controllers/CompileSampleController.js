'use strict';

eventsApp.controller('CompileSampleController',
    function CompileSampleController($scope, $compile, $parse) {

        var fn = $parse('1+2');
        console.log(fn());

        var getter = $parse('event.name');

        var context1 = {event: {name: 'AngularJS Boot Camp'}};
        var context2 = {event: {name: 'Code camp'}};

        console.log(getter(context1));
        console.log(getter(context2));
        console.log(getter(context2, context1));
        
        var result = getter(context1);
        $scope.out = result;

        var setter = getter.assign;
        setter(context2, 'Code Retreat');

        console.log(context2.event.name);
        
        $scope.appendDivToElement = function(markup) {
            return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
        }
    });