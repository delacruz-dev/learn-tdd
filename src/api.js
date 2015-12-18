import request from 'superagent';

export default class PokemonApiClient {

  all() {
    return new Promise((resolve, reject) => {
      request.get(`${PokemonApiClient.BASE_URL}/pokedex/1`)
             .end((err, resp) => {
              if (err) {
                reject(err);
                return;
              }
              try {
                resolve(JSON.parse(resp.text));
              } catch(e) { 
                reject(e); 
              }
            });
    });
  }
}

PokemonApiClient.BASE_URL = 'http://pokeapi.co/api/v1';