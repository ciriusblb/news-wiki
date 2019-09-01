(function(){
	"use strict";
	angular.module("common.services")
	 .factory("newsResource",newsResource);

	function newsResource($resource){
		return $resource("/api/noticias/:idNoticia");
	}

}());