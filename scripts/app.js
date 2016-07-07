var app = angular.module("myShoppingList", []); 
app.controller("myCtrl", function($scope) {
    $scope.products = ["EGGS", "MEAT", "PROTEIN", "CREATINE"];
		//add items
		 $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "Bro, you ALREADY HAVE THAT.";
        }
    }
		//remove item at $index position, once
		$scope.removeItem = function (x){
			$scope.products.splice(x, 1);
		}
		
		
});