'use strict';

angular.module('appSettings')
    .controller('SettingsCtrl', function ($scope, $wix, $log) {
        $scope.params = {
            account: 'java.stratu@gmail.com'
        };

        $wix.UI.initialize({
            numOfImages: 10,
            isIconShown: true,
            imageVisibility: 'show',
            imagesToSync: 0,
            imageMeta: true,
            imageAlt: false,
            imageLink: false
        });

        $wix.UI.onChange('MyButtonColor', function () {
            $log.debug('Change Event is triggered');
            $wix.Settings.triggerSettingsUpdatedEvent('updated', $wix.Utils.getOrigCompId());
        });
    });