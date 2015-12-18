## Mocking
- We need a class to build the following url

```
http://url.for.whatever.com/8989587176134@BannerTop?xxSite=escuelaIt&xxAC=Y
```

- This is the code that generates the previous url:

```javascript
export default new class UrlBuilder{
  get(site){
    return `http://url.for.whatever.com/${Math.floor(Math.random()*1000000)}@BannerTop?xxSite=${site}&xxAC=Y`
  }
}
```

- Although we can test it, the randomness makes our test unreliable:

```javascript
import {expect} from 'chai';
import UrlBuilder from '../src/urlBuilder';

const expectedUrl = `http://url.for.whatever.com/8989587176134@Banner1?xxSite=escuelaIt&xxAC=Y`;
const site = 'escuelaIt';

describe('Url', () => {
  describe('when asking for the url for whatever', () => {
    it('should return the expected url with a random number', () => {
      expect(UrlBuilder.get(site)).to.be.eq(expectedUrl);
    });
  });
});
```

- We need to figure out how to avoid the randomness in our tests. Let's implement a random helper in our Mathematics class:

```
random(){
  return Math.random();
}
```

- Install sinon:

```
> npm i sinon
```

- Create a stub for the random() method:

```javascript
import {expect} from 'chai';
import sinon from 'sinon';
import Mathematics from '../src/mathematics';
import UrlBuilder from '../src/urlBuilder';

const expectedUrl = `http://url.for.whatever.com/12345000000@BannerTop?xxSite=escuelaIt&xxAC=Y`;
const site = 'escuelaIt';

describe('Url', () => {
  let sandbox; 

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(Mathematics, 'random').returns(12345);
  });

  afterEach(() => {
    sandbox.restore();
  })
    
  describe('when asking for the url for whatever', () => {
    it('should return the expected url with a random number', () => {
      expect(UrlBuilder.get(site)).to.be.eq(expectedUrl);
    });
  });
});
``
