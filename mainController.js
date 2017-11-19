ketakiApp.controller('mainController', ["$scope", "$http", function($scope, $http){
	$scope.backImg = {
		background: 'linear-gradient(to bottom right, #26a0da, #314755)',
	};

	$scope.chngBack = function(type){
		switch(type){
			case "origami": 
				$scope.backImg = {
					background: 'url("images/origami.jpg")',
					backgroundSize: '100%'
				};
			break;
			default: 
				$scope.backImg = {
					background: 'linear-gradient(to bottom right, #26a0da, #314755)',
				};
			break;
		}
	};
}]);