'use strict';

angular.module('wixApp')
    .controller('MainCtrl', function ($scope, $wix, $log) {
        //$scope.printText = "Print this Page";
        $scope.handleEvent = function (event) {
            $log.debug('Event was fired');
            $scope.$apply(function () {
                $scope.message = event;
                $wix.getStyleParams(function(styleParams){
                    $log.debug('col: ' + styleParams);
                });
            });
        };

        $scope.printClicked = function() {
            $log.debug('Print page now!');
        }

        $wix.addEventListener($wix.Events.SETTINGS_UPDATED, $scope.handleEvent);

        if ($wix.Utils.getViewMode() !== 'standalone') {
            $scope.instanceId = $wix.Utils.getInstanceId();
            $scope.instance = $wix.Utils.getInstance();
        }

        $log.debug('Random comment!');
    });