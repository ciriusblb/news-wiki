(function(){

	"use strict";

	angular.module("common.services")
	  .factory("CategoriesServices",CategoriesServices);
	  function CategoriesServices($http){
	  	//esto retorna una promesa 
	  	return $http.get('/api/categories')
	  }

}());