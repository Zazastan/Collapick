
start

    .controller("tabCtrl", function ($scope, $state, appService, $uibModal) {
		$scope.basket = appService.getBasket();
		$scope.basketInfo = appService.getBasketInfo();

        $scope.home = function () {
            $state.go("tab.home"); 
        };
		
		$scope.status = {
			isopen: false
		};
		
		$scope.remove = function(index){
			appService.remove(index);
		}
		
		$scope.openModal = function (size, parentSelector) {
			$uibModal.open({
                templateUrl: "modal.html",
                controller: "modalCtrl"
            })
		}
		
		
		
    })
;