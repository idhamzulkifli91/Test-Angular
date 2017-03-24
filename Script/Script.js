var app = angular.module("myAngularModule", []);
		app.controller("myAngularController", function($scope){

			var users = [
				{user_id : "1", username : "Ben", user_occ : "Programmer"},
				{user_id : "2", username : "Sara", user_occ : "Human Resource"},
				{user_id : "3", username : "Wong", user_occ : "Software Engineer"},
				{user_id : "4", username : "Mark", user_occ : "Accountain"},
     			{user_id : "5", username : "Chan", user_occ : "Marketing"},
     	   ]

     	   $scope.users = users;
     	   $scope.sortColumn = "user_id";
     	});