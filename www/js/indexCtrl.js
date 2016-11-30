var app = angular.module('appNoticias', []);


app.controller('indexCtrl', function($rootScope, $http) {
  console.log("BIRRR");

    $http({
        method: 'GET',
        url: 'http://45.55.226.209/news/getAll'
    }).then(function successCallback(response) {
        $rootScope.noticias = response.data.data;
        console.log(response);


    }, function errorCallback(response) {
        console.log(response);
    });
});

//Diferença GET, POST, PUT,DELETE, CONNECT == verbos http, http methods 

//REST: funciona em cima do HTTP
