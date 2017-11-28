/**
 * Created by zeus on 9/17/17.
 */

var states = [
    {
        name:'login',
        state:{
            url:'/login',
            templateUrl:'../views/login.html',
            data:{
                text:"Login",
                visible:"true"
            }
        }
    }
];

var app = angular.module('firstApp',[
    'ui.router'
    ])

    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/login');

        angular.forEach(states,function(state){
            $stateProvider.state(state.name,state.state);
        })

    });
