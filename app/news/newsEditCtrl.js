(function(){
	"use strict";
	angular.module('newsWikiApp')
	  .controller('NewsEditCtrl',NewsEditCtrl);
	function NewsEditCtrl(newsItem,$state){
		var me=this;
		me.newsItem=newsItem;
		if(!me.newsItem.idNoticia){
			alert(me.newsItem.idNoticia);
			me.titulo="Nueva Noticia";
		}else{
			me.titulo="Editar :"+ me.newsItem.tituloNoticia;
		}
		if(!me.newsItem.destacado){
			me.newsItem.destacado=false;
		}

		me.showDatepicker=function($event){
			$event.preventDefault();
			$event.stopPropagation();
			me.open=!me.open;
		}

		me.addTags=function(tags){
			var array=tags.split(',');
			me.newsItem.tags= me.newsItem.tags? me.newsItem.tags.concat(array): array;

			me.newsTags="";
		};
		 me.removeTags=function(idx){
		 	me.newsItem.tags.splice(idx,1);
		 };

		me.guardar=function(){
			me.newsItem.$save(function(data){
				toastr.success("La noticia se ha guardado");
			});
		};
		me.cancelar=function(){
			$state.go("newsList");
		};
	}
}());