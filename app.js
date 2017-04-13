var start = angular.module("start", ['ui.router', 'ui.bootstrap', 'ngAnimate', 'angular-loading-bar', 'ngToast']);


//
start.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state("tab", {
                url: "/tab",
                abstract: true,
                views: {
                    "": {
                        templateUrl: "tab.html",
                        controller: "tabCtrl"
                    }
                }
            })

            .state("tab.home", {
                url: "/home",
                views: {
                    "loput": {
                        templateUrl: "home.html",
                        controller: "homeCtrl"
                    }
                }
            })

        
        ;
        $urlRouterProvider.otherwise('/tab/home');
    }])

;