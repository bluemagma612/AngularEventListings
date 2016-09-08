'use strict';

eventsApp.controller('EditEventController', function EditEventController($scope) {
    $scope.saveEvent = function(event, newEventForm) {
        if(newEventForm.$valid) {
            console.log(newEventForm);
            window.alert('event ' + event.name + ' saved');
        }
    };

    $scope.cancelEvent = function(event) {
        window.location = "/eventDetails.html";
    };
});