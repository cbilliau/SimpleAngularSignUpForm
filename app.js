var app = angular.module('optInApp', []);

app.directive('optIn', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'optIn-template.html',
        replace: true
    };
});
