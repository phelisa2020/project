describe('The FruitEater function ', function(){
    it('should count how many apples have beed eaten', function(){
        var appleAndPearEater = FruitEater();
        appleAndPearEater.eatApple('apple');
        appleAndPearEater.eatApple('apple');
        assert.equal(appleAndPearEater.applesEaten(), 2);
    });
    
    it('should count how many apples and pears have been eaten', function(){
        var appleAndPearEater = FruitEater();
        appleAndPearEater.eatApple('apple');
        appleAndPearEater.eatPear('pear');
        appleAndPearEater.eatApple('apple');
        appleAndPearEater.eatPear('pear');
        appleAndPearEater.eatApple('apple');
        assert.equal(appleAndPearEater.applesEaten(), 3);
        assert.equal(appleAndPearEater.pearsEaten(), 2);
    });
})