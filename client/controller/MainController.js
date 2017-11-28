angular.module('firstApp').controller('MainController',MainController);


MainController.$inject=['$scope', 'mainService'];

function MainController ($scope,mainService){

  var ctrl = this ;

  mainService.getItems().then(function(res){
      ctrl.items = res.data ;
  });

   // ctrl.userDetails = {};
    ctrl.display = function(){
        console.log(ctrl.userDetails);
    };
}