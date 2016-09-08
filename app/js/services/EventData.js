/**
 * Created by Bluemagma on 9/8/16.
 */
eventsApp.factory('eventData', function ($http) {
    return {
            getEvent: function () {
                return $http({method: 'GET', url: '/data/event/1'});
            }
    };
});
