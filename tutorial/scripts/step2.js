﻿angular.module('step2', ['wakanda']);function Controller($scope, $wakanda) {    $scope.initialized = 'not initialized';    // Create a proxy of the server model    $wakanda.init().then(function oninit(ds) {        $scope.initialized = 'initialized';        // lets inspect the name of the available ressources        $scope.dataClasses = Object.keys(ds.getDataClasses());    });}