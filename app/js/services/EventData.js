eventsApp.factory("eventData", function($http) {
    return {
        // event: {
        //         name: "Angular Boot Camp",
        //         date: "1/1/2013",
        //         time: "10:30 am",
        //         location: {
        //             address: "Google Headquarter",
        //             city: "Mountain View",
        //             province: "CA"
        //         },
        //         imageUrl: './img/angularjs-logo.png',
        //         sessions: [
        //             {
        //                 name: "Directives Masterclass Introductory",
        //                 creatorName: "Bob Smith",
        //                 duration: 1,
        //                 level: "advanced",
        //                 abstract: "In this session you will learn ins and outs of direc...",
        //                 upVoteCount: 0
        //             },
        //             {
        //                 name: "Scopes for fun and profit",
        //                 creatorName: "John Doe",
        //                 duration: 2,
        //                 level: "Introductory",
        //                 abstract: "This session will take a closer look at scopes. Learn...",
        //                 upVoteCount: 0
        //             },
        //             {
        //                 name: "Well Behaved Controllers",
        //                 creatorName: "Jane Doe",
        //                 duration: 4,
        //                 level: "Intermediate",
        //                 abstract: "Controllers are the beginning of everything Angular does...",
        //                 upVoteCount: 0
        //             }
        //         ]
        //     },
        getEvent:   function() {
                        return $http({method: 'GET', url: './data/event/1.json'});
                    }
    };
});