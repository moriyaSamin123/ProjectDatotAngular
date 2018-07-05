
var app = angular.module('myApp', []);
app.service('webProxy', ['serverApiProxy', '$q', 'appSetting', function (serverApiProxy, $q, appSetting) {
    var self = this;
    var webMode = appSetting.appEnviroment
    serverApiProxy.set = appSetting
    function get(URL) {
        var d = $q.defer;
        serverApiProxy.get(URL, webMode).then(function (respone) {

            d.resolve(respone);

        }, function (error) {
            d.reject(error)

        });

    };;
    return d.Promise
    
}]);
