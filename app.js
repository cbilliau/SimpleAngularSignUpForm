var app = angular.module('signupApp', []);

app.directive('signUp', function() {
	return {
		templateUrl: 'signup-template.html',
		restrict: 'E',
	};
});
