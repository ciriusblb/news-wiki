(function()
{
	"use strict";
	angular.module('newsWikiApp')
	   .controller('NewsDetailCtrl',NewsDetailCtrl);

	 function NewsDetailCtrl(newsItem){
	 	var me=this;
	 	me.newsItem=newsItem;
		 if(me.newsItem.tags){
		 	me.newsItem.tagList=me.newsItem.tags.toString();
		 }
	 }
}()	);