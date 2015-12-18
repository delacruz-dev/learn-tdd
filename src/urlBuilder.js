import Mathematics from './mathematics';

export default new class UrlBuilder{
  displays(site){
    return `http://url.for.whatever.com/${Math.floor(Mathematics.random()*1000000)}@BannerTop?xxSite=${site}&xxAC=Y`
  }
}