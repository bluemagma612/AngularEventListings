'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData, $log) {
    $scope.sortOrder = 'name';

    eventData.getEvent()
        .$promise
        .then(function (event) { $scope.event = event; })
        .catch(function (response) { console.log(response); }
    );

    $scope.scrollToSession = function () {
        $anchorScroll();
    };

    $scope.upVoteSession  = function(session) {
        session.upVoteCount++;
    };
    $scope.downVoteSession  = function(session) {
        session.upVoteCount--;
    };

    $scope.snippet = '<span style="color:red;">hi there</span>';
    $scope.boolValue = true;

    $scope.myStyle = {color:'red'};
    $scope.myClass = "blue";

    $scope.buttonDisabled = true;
});
