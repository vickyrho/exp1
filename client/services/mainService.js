(function(){

    angular.module('firstApp')
        .factory("mainService",mainService);

    mainService.$inject=['$http'];

    function mainService($http){
        var service = {};

        service.getItems = function(){
          return $http.get("https://api.myjson.com/bins/1eyval").then(function(res){
              return res ;
          },function(res){
              return res ;
          })
        };

        return service ;
    }

})();
