- create directory
- create test folder
- create src folder
- initialize git
- initialize npm
- install mocha
- create mocha npm task:

```
  mocha ./test/server --compilers js:babel-core/register --recursive
```

- create mocha watch task:

```
npm run test:server -- --watch
```

- install istanbul
- create a test coverage task:

```
istanbul cover -x *Spec.js _mocha -- ./test/ --compilers js:babel-core/register --recursive
```