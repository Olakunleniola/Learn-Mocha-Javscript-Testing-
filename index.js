const assert = require("assert"); 

describe('Math', () => {
    describe('.max', () => {
      it('returns the argument with the highest value', () => {
        // Your test goes here
      });
      it('returns -Infinity when no arguments are provided', () => {
        // Your test goes here
      });
    });
  });


describe("oopsss", () => {
    it("check for equality", () => {
        assert.ok(2 !== "2");
    })
})

describe('-', () => {
    it('returns the difference of two values', () => {
      const bigNum = 100;
          const smallNum = 4;
          const expected = 96;0
      
      const result =  bigNum - smallNum;
  
      // Write assertion here
      assert.ok(result === expected)
    });
  });


  // Import assert here
describe('-', () => {
  it('returns the difference of two values', () => {
    const bigNum = 100;
		const smallNum = 4;
		const expected = 96;
    
    const result =  bigNum - smallNum;

    // Write assertion here
    assert.strictEqual(result, expected);
  });
});



const fs = require('fs');
let path, str;
  
describe('appendFileSync', () => {
    path = './message.txt';
     //Using Hooks............
    afterEach(() => {
        fs.unlinkSync(path)
    })

  it('creates a new file with a string of text', () => {
 
   // Setup
   str = 'Hello Node.js';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
    
   // Teardown: restore file
    // fs.unlinkSync(path)
 });
 
 it('creates a new file with a string of text', () => {
 
   // Setup
   str = '';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
    
    // Teardown: restore file
    // fs.unlinkSync(path)
       
 });
});


const Calculate = {
  sum(inputArray) {
    if(inputArray.length === 0) {return 0} 
    return inputArray.reduce((sum, value) => {
      return sum + value;
    });
  },

  factorial(num) {
    if (num === 0) {
      return 1;
    } else {
      return num * Calculate.factorial(num - 1);
    }
  }
}


describe('Calculate', () => {
  
  describe('.sum',() => {
    it('returns the sum of an array of numbers', () => {
      const expectedResult = 6;
      const inputArray = [1,2,3]
      
      const result = Calculate.sum(inputArray)
      
      assert.strictEqual(result, expectedResult);
    });
    
    it('returns the sum of a four item list', ()=>{
      const expectedResult = 22;
      const inputArray = [4,6,5,7];
      
      const result = Calculate.sum(inputArray);
      
      assert.strictEqual(result, expectedResult)
      
    });

    it("returns zero for an empty array", () => {
      const expectedResult = 0;
      const inputArray = []
      
      const result = Calculate.sum(inputArray)
      
      assert.strictEqual(result, expectedResult);    });
  });

  
  describe('.factorial', () => {
      it("return the correct value of 5!", () => {
        //setup
        const expectedResult = 120;
        const input = 5;
  
        // Exercise
        const result = Calculate.factorial(input);
        
        // Verify
        assert.strictEqual(result, expectedResult);
      });
      
      it("return the correct value of 3!", () => {
        //setup
        const expectedResult = 6;
        const input = 3;
  
        // Exercise
        const result = Calculate.factorial(input);
        
        // Verify
        assert.strictEqual(result, expectedResult);
      });
      
      it("return the correct value of 0!", () => {
        //setup
        const expectedResult = 1;
        const input = 0;
  
        // Exercise
        const result = Calculate.factorial(input);
        
        // Verify
        assert.strictEqual(result, expectedResult);
      });
  });
});

