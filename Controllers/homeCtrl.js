start

    .controller("homeCtrl", function ($state, $scope, appService, ngToast) {
		$scope.data ={};
		appService.getPizzas()
			.then(function (response){
				$scope.pizzas = response;
			}, function(response){
				
			})
        $scope.data.filter = "";
		
		$scope.addToBasket = function(item){
			pizza = {condiments:[]};
			for(var i in item){
				if (i !== "$$hashKey"){
					if (i === "Valkosipuli" && item[i]){
						pizza.condiments.push(i);
					}
					else if(i === "Tulinen" && item[i]){
						pizza.condiments.push(i);
					}
					else if (i === "Oregano" && item[i]){
						pizza.condiments.push(i);
					}
					else{
						pizza[i] = item[i];
					}
				}	
			}
			console.log(pizza);
			ngToast.create({
				content: 'Tuote laitettu ostoskoriin',
			});
			appService.addToBasket(pizza);
		}
		
    })

;