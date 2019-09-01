
//LIFE Inmediately Invoked Funtion Expression
(function(){

	//para no cometer informalidades
	"use strict";//forma de decir que sea estricto con la defincion del legma ("estadirazion del codigo que rige javascript")

	// estructura angular.module("nombre del modulo",las dependencias)
	var app = angular.module("newsWikiApp",["common.services","common.servicesMock","ui.router","ui.mask","ui.bootstrap","ngMessages"]);
	
	app.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise("/");
		$stateProvider
		 .state('home',{
		 	url:'/',
		 	templateUrl:'app/appVistaWelcome.html'
		 })
		 .state('newsList',{
		 	url: '/noticias',
		 	templateUrl: 'app/news/newsListView.html',
		 	controller:'NewsCtrl as vm'
		 })
		 .state('newsEdit',{
		 	abstract:true,
		 	url:'/noticias/edit/:idNoticia',
		 	templateUrl:'app/news/newsEditView.html',
		 	controller: 'NewsEditCtrl as vm',
		 	resolve: {
		 		newsResource: "newsResource",
		 		newsItem: function(newsResource,$stateParams){
		 			var idNoticia=$stateParams.idNoticia;
		 			return newsResource.get({idNoticia:idNoticia}).$promise;
		 		}
		 	}
		 })
		 .state('newsEdit.info',{
		 	url:'/info',
		 	templateUrl:'app/news/newsEditInfoView.html'
		 })
		 .state('newsEdit.tags',{
		 	url:'/tags',
		 	templateUrl:'app/news/newsEditTagsView.html'
		 })
		 .state('newsDetail',{
		 	 url:'/noticias/:idNoticia',
		 	 templateUrl:'app/news/newsDetailView.html',
		 	 controller:'NewsDetailCtrl as vm',
		 	 resolve: {
		 	 	newsResource:"newsResource",
		 	 	newsItem: function(newsResource,$stateParams){
		 	 		var idNoticia= $stateParams.idNoticia;
		 	 		return newsResource.get({idNoticia: idNoticia}).$promise;
		 	 	}
		 	 }
		    }
		 	)

	});

}());//se ejecuta automaticamente al inicio
