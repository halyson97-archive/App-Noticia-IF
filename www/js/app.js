'use strict';

var spa = angular.module('appNoticias', ['ngRoute']);

spa.controller('mainCtrl',['$scope', '$http',  
    function CardapioCtrl($scope, $http) {

        $http({ 
            url: "http://45.55.226.209/news/getLast", 
            dataType: 'json', 
            method:'GET',
            headers: {'Content-Type': 'application/json'},
        }).success(function (response) {
            $scope.noticias = response.data;
            console.log(response);
        }).error(function (response) {
            console.log("Erro");
            console.log(response);          
        });

        $scope.openInBrowser = function(url){
            window.open(url);
        }

       
        
    }]);