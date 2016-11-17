(function(){
    'use strict';

    angular.module('gmSubmoduleApp')
        .config(config);
    config.$inject=['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/dashboard', {
                templateUrl: 'client/scripts/dashboard/dashboard.html',
                controller: 'dashboardCtrl',
                controllerAs: 'vm',
                title: 'Dashboard',
                activeParent: 'DSH',
                // activeMenu: 'ITEM',
                // activeParentName: 'LEFT_MENU.PUT.PUT_TEXT',
                // activeMenuName: 'LABEL_TEXT.PUT_ITEM',
                access: {
                    requiredLogin: true,
                    requiredPrecondition: true,
                }
            });
    }
})();
