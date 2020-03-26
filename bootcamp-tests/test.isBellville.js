describe('isFromBellville' , function(){
    it('should return true for CY 123-223' , function(){
      assert.equal(isFromBellville('CY 123-223'));
    });
    it('should return false for CJ 123-223' , function(){
      assert.equal( isFromBellville('CY 123-224'));
    });
      it('the regNo should startWith CY', function(){
      assert.equal(startWith('CY'));
  });
});





