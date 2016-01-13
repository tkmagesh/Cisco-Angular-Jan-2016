  var utils = angular.module("utils", []);
        utils.value("defaultTrimLength", 30);

        utils.filter("trimText", function($filter, defaultTrimLength){
            var limitTo = $filter('limitTo');
            return function(text, trimLength){
                trimLength = trimLength || defaultTrimLength;
                return text.length < trimLength ? text : limitTo(text, trimLength) + '...';
            }
        });

        utils.value("momentApi", moment);

        utils.filter('elapsed', function(momentApi){
            return function(data){
                return momentApi(data).fromNow();
            };
        });
