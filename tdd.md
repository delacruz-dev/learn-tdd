## Configure your environment
- create directory
- create test folder
- create src folder
- initialize git
- initialize npm
- install the following dependencies:
  - babel
  - babel-core
  - babel-preset-es2015
  - chai
  - isparta
  - mocha
- create mocha npm task:

```
mocha test --compilers js:babel-core/register --recursive
```

- create mocha watch task:

```
npm run test -- --watch
```

- install istanbul
- create a test coverage task:

```
istanbul cover -x *Spec.js _mocha -- ./test/ --compilers js:babel-core/register --recursive
```

## Start doing example without TDD
- Create a funtion that, given two numbers, returns the greatest

```
> touch src/greatest numbers.js
```

- First return just a random text in console

```
module.exports = function(a, b){
  console.log('a is greatest');
};
```

- Test it:

```javascript
> node
> var gn = require('src/greatest-number.js');
> gn();
```

- Do the real code

```javascript
module.exports = function(a, b){
  if(a > b)
    return a;
  } else {
    return b;
  }
};
```

- What happens if it gets more complicated? Return the greatest value of three

```javascript
module.exports = function(a, b, c){
  if(a > b) {
    if(a > c) {
      console.log('a is the greatest', a);
      return a;
    }
    else {
      console.log('c is the greatest', c);
      return c;
    }
  } else {
    if (b > c) {
      console.log('b is the greatest', b);
      return b;
    } else {
      console.log('c is the greatest', c);
      return c;
    }
  }
};
```

- What if it gets a little bit more complicated? Return the lowest and greatest values of three

```javascript
module.exports = function(a, b, c){
  // comprobamos si a es el mayor
  if(a > b){
    if((a > c) && (b > c)){
      // a es el mayor y c es el menor
      return {
        greatest: a,
        lowest: c
      };
    } else if ((a > c) && (c > b)){
      // Sino a es el mayor y el menor es b
      return {
        greatest: a,
        lowest: b
      };
    }
  // comprobamos si b es mayor
  } else if (b > a){
    if ((b > c) && (a > c)){
      // b es el mayor y el menor es c
      return {
        greatest: b,
        lowest: c
      };
    }
  } else if (c > a){
    if((c > b) && (a > b)){
      // c es el mayor y el menor es b
      return {
        greatest: c,
        lowest: b
      };
    }
  } else {
    // c es el mayor y el menor es a
    return {
      greatest: c,
      lowest: a
    };
  }
};
```

- test it with:

```
> gn(43, 111, 3);
> gn(4311, 111, 3535);
> gn(43, 111, 3535);
```

- What happens if we need to calculate the greatest and lowest values of an undefined array of numbers?

## Let's do tdd

```
> touch test/greatest-number-spec.js
```

- Spec skeleton:

```javascript
describe( '[unit of work]', function ()  
{
    describe( 'when [scenario]', function ()
    {
        it( 'should [expected behaviour]', function ()
        {

        } );
    } );
} );
```

- Write a spec:

```javascript
import {expect} from 'chai';
import Mathematics from '../src/Mathematics';

describe('Mathematics test suite', () => {
  describe('Given two numbers', () => {
    it('Should return the greatest', () => {
      expect(Mathematics.greatest(1, 2)).to.be.eq(2);
      expect(Mathematics.greatest(3, 2)).to.be.eq(3);
      expect(Mathematics.greatest(1, 1)).to.be.eq(1);
    });
  });
});
```

- Run 

```
> npm run test:watch
```

- make it pass

```javascript
export default new class Mathematics{
  greatest(a, b) {
    return a > b ? a : b;
  }
}
```

- Do the lowest

```javascript 
it('Should return the lowest', () => {
  expect(Mathematics.lowest(1, 2)).to.be.eq(1);
  expect(Mathematics.lowest(3, 2)).to.be.eq(2);
  expect(Mathematics.lowest(1, 1)).to.be.eq(1);
});
````

- make it pass

```javascript
lowest(a, b) {
  return a < b ? a : b;
} 
```

- What if we need a function to calculate the greatest of three?

```javascript
it('Should return the greatest', () => {
  expect(Mathematics.greatestOfThree(1, 2, 3)).to.be.eq(3);
  expect(Mathematics.greatestOfThree(4, 6, 5)).to.be.eq(6);
  expect(Mathematics.greatestOfThree(9, 8, 7)).to.be.eq(9);
});
```

- Makeit pass

```javascript
greatestOfThree(a, b, c){
  return this.greatest(this.greatest(a, b), c);
}
```

- Generic case:

```javascript
it('Should return the greatest', () => {
  expect(Mathematics.greatest(1, 2, 3)).to.be.eq(3);
  expect(Mathematics.greatest(4, 6, 5)).to.be.eq(6);
  expect(Mathematics.greatest(9, 8, 7)).to.be.eq(9);
});
```

- Make it pass

```javascript
greatest(...args) {
  return args.reduce((prev, curr) => prev > curr ? prev : curr, 0);
}
```

## Test coverage

- Run

```
> npm run test:coverage
```

- Comment a test (with xit) and run it again to show the difference
- Show the report

