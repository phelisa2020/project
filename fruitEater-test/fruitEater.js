function FruitEater(){
	var pear = 0;
	var apple = 0;

	function eatPear(){
		pear++
	}
	function eatApple(){
		apple++
	}
	function applesEaten(){
		return apple;
	}
	function pearsEaten(){
		return pear;
	}
	return{
		eatPear,
		pearsEaten,
		eatApple,
		applesEaten,
	}
}

