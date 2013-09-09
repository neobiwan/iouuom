
'use strict';

angular.module('myApp').controller('HomeController', function($scope, $http) {
// bind event listeners to $scope for ng-click //

// handle user logout //


	$scope.showLockedAlert = function(msg){
		$('.modal-alert').modal({ show : false, keyboard : false, backdrop : 'static' });
		$('.modal-alert .modal-header .modal-title').text('Success!');
		$('.modal-alert .modal-body p').html(msg);
		$('.modal-alert').modal('show');
		$('.modal-alert button').click(function(){window.location.href = '/';})
		setTimeout(function(){window.location.href = '/';}, 3000);
	}
	
	$scope.attemptLogout = function()
	{

		$http({method: 'POST', url: '/home', params: {"logout" : "true"}}).
		success(function(data, status, headers, config) {
			$scope.showLockedAlert('You are now logged out.<br>Redirecting you back to the homepage.');
		}).
		error(function(data, status, headers, config) {
			console.log('Error '+ status);
		});
		//var that = this;
		/*$.ajax({
			url: '/home',
			type: "POST",
			data: {logout : true},
			success: function(data){
	 			$scope.showLockedAlert('You are now logged out.<br>Redirecting you back to the homepage.');
			},
			error: function(jqXHR){
				console.log(jqXHR.responseText+' :: '+jqXHR.statusText);
			}
		});*/
	}

//}

});

