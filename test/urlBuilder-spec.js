import {expect} from 'chai';
import sinon from 'sinon';
import Mathematics from '../src/mathematics';
import UrlBuilder from '../src/urlBuilder';

describe('UrlBuilder', () => {
  let sandbox; 
  const expectedUrl = `http://url.for.whatever.com/12345000000@BannerTop?xxSite=escuelaIt&xxAC=Y`;
  const site = 'escuelaIt';
  
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(Mathematics, 'random').returns(12345);
  });

  afterEach(() => {
    sandbox.restore();
  });
    
  describe('#displays', () => {
    describe('given an specific site', () => {
      it('should return the expected url containing a random number', () => {
        expect(UrlBuilder.displays(site)).to.be.eql(expectedUrl);
      });
    });
  });
});