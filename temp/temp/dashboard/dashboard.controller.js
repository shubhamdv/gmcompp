(function() {
    'use strict';
    /* jshint camelcase: false */
    angular.module('gmSubmoduleApp')
        .controller('dashboardCtrl', DashboardCtrl);
    DashboardCtrl.$inject = ['$scope'];

    function DashboardCtrl($scope) {
        var vm = this;

        vm.title = "Dashboard";
    }
})();