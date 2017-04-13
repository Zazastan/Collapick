start

    .controller("modalCtrl", function ($scope, appService, $uibModalInstance) {
		$scope.basket = appService.getBasket();
		$scope.basketInfo = appService.getBasketInfo();
		
		$scope.closeModal = function(){
			$uibModalInstance.close()
		}
		$scope.order = function(){
			alert("Kiitos! Tilauksesi toimitetaan sinulle tunnin kuluessa!");
			appService.clearBasket();
			$uibModalInstance.close();
		}
	});