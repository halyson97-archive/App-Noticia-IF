'use strict';

var spa = angular.module('appNoticias', ['ngRoute']);

spa.controller('mainCtrl',['$http','$timeout', function CardapioCtrl( $http,$timeout) {

        let vm = this;

        $http({ 
            url: "http://45.55.226.209/news/getLasta", 
            dataType: 'json', 
            method:'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (response) {

            if (typeof(Storage) !== "undefined") {
                localStorage.setItem("noticias", JSON.stringify(response.data));
                vm.noticias = JSON.parse(localStorage.getItem("noticias"));
                console.log("pegando noticias da requisição");

            } else {
                vm.noticias = response.data;
            }

            console.log(response.data);
        }).error(function (response) {

            if (typeof(Storage) !== "undefined") {
                if(JSON.parse(localStorage.getItem("noticias")) !== null){
                    vm.noticias = JSON.parse(localStorage.getItem("noticias"));
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

        vm.openInBrowser = function(url){
            window.open(url);
        }

        vm.openSearch = function(){
            let toolbar = document.querySelector("#toolbar-search");
            toolbar.style.display = "block";
            let inp = document.querySelector("#inputSearch");
            inp.focus();

        }

        vm.closeSearch = function(){
            vm.searchUser = "";
            let toolbar = document.querySelector("#toolbar-search");
            toolbar.style.display = "none";
        }    
    }]);