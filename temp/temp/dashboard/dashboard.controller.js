(function() {
    'use strict';
    
    try {
    	angular.module('gmSubmoduleApp');
    } catch(err) {
    	// App hasn't been not initialize yet. Means that this app has been inserted into another app. Let's initialize this app here.
    	angular.module('gmSubmoduleApp', [
    	    'ngCookies',
    	    'ngResource',
    	    'ngSanitize',
    	    'ngRoute',
    	    'ui.bootstrap',
    	    'pascalprecht.translate',
    	    'angular-loading-bar',
    	    'focus-if',
    	    'ngTagsInput',
    	    'daterangepicker',
    	    '720kb.datepicker',
    	    'cfp.hotkeys',
    	    'LocalStorageModule',
    	])
    }


    angular.module('gmSubmoduleApp')
        .controller('dashboardCtrl', DashboardCtrl);
    DashboardCtrl.$inject = ['$scope'];

    function DashboardCtrl($scope) {
        var vm = this;

        vm.title = "Dashboard";
    }
})();