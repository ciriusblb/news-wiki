( function(){
	"use strict";
	angular.module("newsWikiApp")//camel case
	.controller("CategoriesCtrl",["CategoriesServices",CategoriesCtrl]);//pascal case

	function CategoriesCtrl( CategoriesServices){
		var me=this;
		// CategoriesServices.then(function(response){
		// 	me.categories=response.data;
		// });
		categoriesRepository.getCategories(
			   {
			   	CategoriesServices:CategoriesServices,
			   	success:function(data){
			   		me.categories=data;
			   	}
			   }
			);
	    me.showCategories=true;
	    me.toggleCategories=function(){
	    	me.showCategories= !me.showCategories;
	    }
	}
	

   //patron  Revealing Module
	var categoriesRepository=(function(){
		var me={};

		me.getCategories=function(options){
			options.CategoriesServices.then(function(response){
				options.success(response.data);
			});
		};

		return{getCategories:me.getCategories};
	}());


}());