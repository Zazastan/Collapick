
start
    .service("appService",function($q, $http){
		
		var basket = [];
		var basketInfo = {totalCost: 0};
        
		var getPizzas = function(){
			return $q(function(resolve, reject){
				$http({
					method: "GET",
					url:"URL REMOVED",
					headers: {"Content-Type": "application/xxx-form-encoded; charset=utf-8"}
				}).then(function (response) {
					for (var i=0; i<response.data.length; i++){
						response.data[i].fillings = response.data[i].fillings.split(",");
						response.data[i].prize = parseFloat(response.data[i].prize);
					}
					console.log(response);
					resolve(response.data)

				}, function (err) {
					console.log(err);
					alert("Jokin meni vikaan haettaessa pizzoja!");
				
				});
			});
			
		};
		
		var addToBasket = function(item){
			basketInfo.totalCost += item.prize;
			basket.push(item);
		}
		
		var remove = function(index){
			basketInfo.totalCost -= basket[index].prize
			basket.splice(index,1)
		}
		var clearBasket = function(){
			basket.splice(0, basket.length);
			basketInfo.totalCost = 0;
		}
		return{
			getPizzas: getPizzas,
			addToBasket: addToBasket,
			remove: remove,
			clearBasket: clearBasket,
			getBasket: function(){return basket},
			getBasketInfo: function(){return basketInfo}
		}
	})
;