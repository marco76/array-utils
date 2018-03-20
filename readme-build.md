npm test
npm run prebublish

## Publish locally

- create a new package
npm pack

- go in the project that uses the package
npm install ../[PATH_TO_NPM]/package-version.tgz
result :
  "@molteni/array-utils": "file:../../../../marco/array-utils/molteni-array-utils-0.0.5.tgz",