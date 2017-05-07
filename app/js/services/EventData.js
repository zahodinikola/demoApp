eventsApp.factory("eventData", function($http, $log) {
    return {
        getEvent: function(successcb) {
            $http({method: 'GET', url: './data/event/1'}).
                success(function (data, status, headers, config) {
                    successcb(data);
                }).
                error(function(data, status, headers, config) {
                    $log.warn(data, status, headers(), config);
                });
        }
        // event: {
        //     name: "Angular Boot Camp",
        //     date: 1493667543252,
        //     time: "10:30 am",
        //     location: {
        //         address: "Google Headquarters",
        //         city: "Mountain View",
        //         province: "CA"
        //     },
        //     imageUrl: "./img/angularjs-logo.png",
        //     sessions: [
        //         {
        //             name: "Directives masterclass introductory",
        //             creatorName: "Bob Smith",
        //             duration: 2,
        //             level: "Advanced",
        //             abstract: "In this session you will learn the ins and outs of direct....",
        //             upVoteCount: 0
        //         },
        //         {
        //             name: "Scopes for fun and profit",
        //             creatorName: "John Doe",
        //             duration: 1,
        //             level: "Introductory",
        //             abstract: "This session will take a closer look at scopes. Learn.....",
        //             upVoteCount: 0
        //         },
        //         {
        //             name: "Well behaved controllers",
        //             creatorName: "Jane Doe",
        //             duration: 4,
        //             level: "Intermediate",
        //             abstract: "Controllers are the beginning if everything Angular does.....",
        //             upVoteCount: 0
        //         }
        //     ] 
        // }

    };
});