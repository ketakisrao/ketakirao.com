ketakiApp.config(function($routeProvider){
	$routeProvider
	.when("/", {
		tempalteUrl: 'index.html'
	})
	.when("/origami", {
		templateUrl: 'templates/origami.html'
	})
});