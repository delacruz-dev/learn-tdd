export default new class Mathematics{
  greatest(...args) {
    return args.reduce((prev, curr) => prev > curr ? prev : curr, 0);
  }

  lowest(a, b) {
    return a < b ? a : b;
  }

  random(){
    return Math.random();
  }
}