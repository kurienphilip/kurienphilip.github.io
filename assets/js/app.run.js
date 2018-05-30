(function () {
    'use strict';
    angular.module('app')
        .run(run);
        run.$inject = [
            '$timeout',
            '$rootScope',
            '$window',
            '$location'
        ];
        function run($timeout, $rootScope, $window, $location) {
            var warningtime;
            var waitingTime;
            var isSessionTimedOut = false;
            $rootScope.$on('$routeChangeSuccess', function (event, next, current) {
                var path = next.$$route.originalPath;
                var entity = next.params.entity;
                if (entity != undefined)
                    path = path.replace(":entity", entity);
                var condition = path;
                switch (condition) {
                    default:
                        $('body').css('background-color', "#330a49");
                        $('html').css('background-color', "#330a49");
                        break;
                }
            });
        }       
})();