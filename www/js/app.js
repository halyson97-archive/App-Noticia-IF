'use strict';

var spa = angular.module('appNoticias', ['ngRoute']);

spa.controller('mainCtrl',['$scope', '$http','$timeout', function CardapioCtrl($scope, $http,$timeout) {

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

        $timeout(function(){
            let splash = document.querySelector("#splash");
            splash.remove();
        }, 3000);

        $scope.openInBrowser = function(url){
            window.open(url);
        }

        $scope.openSearch = function(){
            let toolbar = document.querySelector("#toolbar-search");
            toolbar.style.display = "block";
            let inp = document.querySelector("#inputSearch");
            inp.focus();

        }

        $scope.closeSearch = function(){
            $scope.searchUser = "";
            let toolbar = document.querySelector("#toolbar-search");
            toolbar.style.display = "none";
        }    
    }]);