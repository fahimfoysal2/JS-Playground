<h2>Directives</h2>
<pre>
ng-app        = " " -> Angular application
ng-controller = " " -> 
ng-model      = " " -> Bind HTML controls to app data
ng-init       = " " -> Initialize app data
ng-repeat     = " x <i>in</i> array/object " -> repeat HTML while iterete in obj/array 
</pre>


<h2>onPageScript</h2>
<pre>
var app = angular.module('appName',[]);
app.controller('controllerName', function($scope){
    $scope.variablesFromModel/initialis = " ";
});
</pre>