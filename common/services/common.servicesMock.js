(function(){
	"use strict";

	var app= angular.module("common.servicesMock",["ngMockE2E"]);
	app.run( function($httpBackend) {

		$httpBackend.whenGET(/app/).passThrough();
		var categories=["Politica","Economia","Deportes","Moda","Mundo"];

		var categoriesUrl="/api/categories";

		$httpBackend.whenGET(categoriesUrl).respond(categories);

		var news = [
		 {
		 	"idNoticia":1,
		 	"codigoNoticia":"NWD-9838",
		 	"tituloNoticia" :"Peru envio nota diplomatica a chile",
		 	"descripcionNoticia":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ipsa sunt possimus repellat recusandae iusto, blanditiis adipisci a fugit voluptates nisi quia velit et, qui corporis non doloremque quam ducimus.",
		 	"fechaPublicacion":new Date(),
		 	"banner" : "https://img.elcomercio.pe/files/listing_ec_seccion_ultimas_noticias/uploads/2017/07/16/596ba585e1d19.jpeg",
		 	"destacado" : true,
		 	"categoria" :"Politica",
		 	"tags" : ["peru","politica","guerra"]
		 },
		 {
		    "idNoticia":2,
		 	"codigoNoticia":"NWD-9839",
		 	"tituloNoticia" :"Peru no envio nota diplomatica a chile",
		 	"descripcionNoticia":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ipsa sunt possimus repellat recusandae iusto, blanditiis adipisci a fugit voluptates nisi quia velit et, qui corporis non doloremque quam ducimus.",
		 	"fechaPublicacion":new Date(1998,6,27),
		 	"banner" : "https://img.elcomercio.pe/files/listing_ec_seccion_ultimas_noticias/uploads/2017/07/16/596b8f4aaaf73.jpeg",
		 	"destacado" : true,
		 	"categoria" :"Economia",
		 	"tags" : ["peru","politica","guerra"]
		 },
		 {
		 	"idNoticia":3,
		 	"codigoNoticia":"NWD-9840",
		 	"tituloNoticia" :"Presidente en la carcel",
		 	"descripcionNoticia":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ipsa sunt possimus repellat recusandae iusto, blanditiis adipisci a fugit voluptates nisi quia velit et, qui corporis non doloremque quam ducimus.",
		 	"fechaPublicacion":new Date(2015,7,30),
		 	"banner" : "https://img.elcomercio.pe/files/listing_ec_seccion_ultimas_noticias/uploads/2017/07/14/59694f3e6f374.jpeg",
		 	"destacado" : false,
		 	"categoria" :"Politica",
		 	"tags" : ["peru","politica","guerra"]
		 }];



		 var newsUrl="/api/noticias";
		 $httpBackend.whenGET(newsUrl).respond(news);

		 var editingRegExp= new RegExp(newsUrl + "/[0-9][0-9]*",'');
		 $httpBackend.whenGET(editingRegExp).respond(function(method,url,data){
		 	var newsItem={idNoticia:0};
		 	var parameters= url.split('/');
		 	var length= parameters.length;
		 	var newsItemId=parameters[length-1];

		 	if(newsItemId>0){
		 		for (var i = 0; i < news.length; i++) {
		 			if(news[i].idNoticia==newsItemId){
		 				newsItem=news[i];
		 				break;
		 			}
		 		}
		 	}
		 	return [200,newsItem,{}];
		 });

	$httpBackend.whenPOST(newsUrl).respond(function(method,url,data){
		var newsItem= angular.fromJson(data);
		if(!newsItem.idNoticia){
			newsItem.idNoticia=news[news.length-1].idNoticia + 1;
			news.push(newsItem);
		}else{
			for (var i = 0; i < news.length; i++) {
				if(news[i].idNoticia==newsItem.idNoticia)
				{
					news[i]=newsItem;
					break;
				}
			}
		}
		return[200,newsItem,{}];
	});
	  });
	
}());