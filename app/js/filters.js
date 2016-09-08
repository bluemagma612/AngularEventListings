'use strict';

eventsApp.filter('durations', function() {
    return function(duration) {
        switch (duration) {
            case 1:
                return "30 Minutes";
            case 2:
                return "1 Hour";
            case 3:
                return "Half Day";
            case 4:
                return "Full Day";
        };
    };
});
// filter to show a number of stars equal to the level of difficulty
eventsApp.filter('stars', function() {
    return function(level) {
        var i=1;
        var stars = "<i class='icon-star'></i>";
        while(i < level){
            stars = stars + "<i class='icon-star'></i>";
            i++;
        };
        return stars;
    };
});