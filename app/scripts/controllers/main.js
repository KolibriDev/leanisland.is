'use strict';

angular.module('leanisland.isApp')
  .controller('MainCtrl', function ($scope,$location) {
    $scope.active = $location.path().replace("/","");
    $('.nav-list-item-active').removeClass('nav-list-item-active');
    $('.'+($scope.active||'mainLink')).addClass('nav-list-item-active');
  });
