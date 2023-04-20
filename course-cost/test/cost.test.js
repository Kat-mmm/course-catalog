describe('Course Cost Tests', ()=>{
    describe('Ensure that courses get different prices across discount windows', ()=>{
        it('Course should get a discount of 0 if the day is the 1st', ()=>{
            let courseCosts = courseCost('p1', '2023-03-2');
    
            assert.equal(0, courseCosts.discount);
        })
        it('Course should get a discount of 0 if the day is the 25th', ()=>{
            let courseCosts = courseCost('p1', '2023-03-22');
    
            assert.equal(3140, courseCosts.discount);
        })
        it('Course should get a discount of 0 if the day is the 12th', ()=>{
            let courseCosts = courseCost('p1', '2023-03-12');
    
            assert.equal(1570, courseCosts.discount);
        })
    })

})