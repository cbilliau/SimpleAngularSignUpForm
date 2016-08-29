var app = angular.module('signupApp', []);

app.directive('yoYo', function() {
	return {
		templateUrl: 'yo-template.html',
		restrict: 'AE',
	};
});
