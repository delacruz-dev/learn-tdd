
import {expect} from 'chai';
import nock from 'nock';
import PokemonApiClient from '../src/api';
import apiResponse from './fixtures/apiResponse';

describe('Pokémon Api Client', () => {
  let client;

  beforeEach(() => {
    client = new PokemonApiClient();
  });

  afterEach(() => {
    client = null;
  });

  it('should return a list of every Pokémon that exists', (done) => {
    const server = nock(PokemonApiClient.BASE_URL)
                  .get('/pokedex/1')
                  .reply(200, JSON.stringify(apiResponse));

    client.all().then((pokedex) => {
      expect(pokedex.pokemon).to.be.an.instanceof(Array);
      done();
    });
    server.done();
  });

  it('notify properly server errors', (done) => {
    const query = 'bar';
    const server = nock(PokemonApiClient.BASE_URL)
                  .get('/pokedex/1')
                  .reply(404);

    client.all().catch((err) => {
      expect(err).to.not.be.undefined;
      done();
    });
  });
});