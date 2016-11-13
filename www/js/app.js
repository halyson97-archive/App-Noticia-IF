'use strict';

var spa = angular.module('appNoticias', ['ngRoute']);

spa.controller('mainCtrl',['$scope', '$http','$timeout', function CardapioCtrl($scope, $http,$timeout) {

        $http({ 
            url: "http://45.55.226.209/news/getLast", 
            dataType: 'json', 
            method:'GET',
            headers: {'Content-Type': 'application/json'},
        }).success(function (response) {

        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("noticias", JSON.stringify(response.data));
            $scope.noticias = JSON.parse(localStorage.getItem("noticias"));
            console.log("pegando noticias da requisição");

        } else {
            $scope.noticias = response.data;
        }

            console.log(response.data);
        }).error(function (response) {

            if (typeof(Storage) !== "undefined") {
                if(JSON.parse(localStorage.getItem("noticias")) !== null){
                    $scope.noticias = JSON.parse(localStorage.getItem("noticias"));
                    console.log("pegando noticias do localstorage");
                }                 
            } else {
                console.log("Erro");
                console.log(response);  
            }
                 
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