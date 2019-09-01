(function(){
	"use strict";
	//recuperar el moculo
	angular.module("newsWikiApp")
	 .controller("NewsCtrl",["newsResource",NewsCtrl]);

	 //mini-safe array
	function NewsCtrl(newsResource){
		var me=this;
		newsRepository.getNews(
			 {
			 	newsResource:newsResource,
			 	success:function(data){
			 		me.news=data;
			 	}
			 }
			);
		me.onCategoryClick=function(category){
			if(category){me.filterCategory=category;
			}else{me.filterCategory=""}
			
		};
	}
	
	 //patron  Revealing Module
	 var newsRepository= (function(){
	 	var me={};

	 	me.getNews= function(options){
	 		 options.newsResource.query(function(data){
	 		 	options.success(data);
	 		 });
	 	};
	 	return {getNews:me.getNews};
	 }());


}());