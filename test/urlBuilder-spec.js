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