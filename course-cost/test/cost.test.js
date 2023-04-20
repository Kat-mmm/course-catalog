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

    describe('Ensure different courses has different prices', ()=>{
        it('Course with code r1 should cost R5675.00', ()=>{
            let courseCosts = courseCost('r1', '2023-03-2');
    
            assert.equal(5675.00, courseCosts.cost);
        })
        it('Course with code r1 should cost R7850.00', ()=>{
            let courseCosts = courseCost('p1', '2023-03-2');
    
            assert.equal(7850.00, courseCosts.cost);
        })
        it('Course with code r1 should cost R8990.00', ()=>{
            let courseCosts = courseCost('p2', '2023-03-2');
    
            assert.equal(8990.00, courseCosts.cost);
        })
    })

    describe('Ensure that invalid codes are handled correctly', ()=>{
        it('If the code is not valid the status should return Invalid code', ()=>{
            let courseCosts = courseCost('r11', '2023-03-2');
    
            assert.equal('Invalid code', courseCosts.status);
        })

        it('If the code is not valid the status should return Invalid code', ()=>{
            let courseCosts = courseCost('11', '2023-03-2');
    
            assert.equal('Invalid code', courseCosts.status);
        })
       
    })

    describe('Ensure that invalid dates returns a status of: Invalid day', ()=>{
        it('If the date enetered is not valid the fucntion should return invalid day', ()=>{
            let courseCosts = courseCost('r1', '2023-03-p');
    
            assert.equal('Invalid day', courseCosts.status);
        })

        it('If the date enetered is not valid the fucntion should return invalid day', ()=>{
            let courseCosts = courseCost('p1', '2023-03-44');
    
            assert.equal('Invalid day', courseCosts.status);
        })
       
    })

})