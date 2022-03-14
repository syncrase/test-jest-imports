// jest.config.js
// const { pathsToModuleNameMapper } = require("ts-jest/utils");
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require('./tsconfig.json');
// const {defaults} = require('jest-config');
const {defaults} = require('jest-config');

module.exports = {
  verbose: true,
  // preset: "ts-jest",
  // globals: {
  //   "ts-jest": {
  //     useESM: true,
  //   },
  // },
  testEnvironment: "node",
  moduleFileExtensions: [
    "js",
    "json",
    "ts",
    "d.ts"
  ],
  rootDir: "./",
  roots: [
    "<rootDir>",
    // "<rootDir>/src",
    // "<rootDir>/node_modules",
    // "<rootDir>/node_modules/@types"
  ],
  modulePaths: [
    "<rootDir>",
    "node_modules",
    // "<rootDir>/node_modules", --> equivalent
    // "node_modules/@types",
    //   "<rootDir>/src",
    // "<rootDir>/node_modules/@types"
  //   "<rootDir>/src",
  //   "<rootDir>/node_modules",
  //   "<rootDir>/node_modules/@types"
  ],
  moduleNameMapper: {
  //   ...pathsToModuleNameMapper(compilerOptions.paths/*, { prefix: "<rootDir>/" }*/)
  //   "cls-hooked": "<rootDir>/node_modules/@types/cls-hooked",
  },
  moduleDirectories: [
    // "node_modules",
  //   "<rootDir>/src",
  //   "<rootDir>/node_modules",
  //   "node_modules/@types",
    // "<rootDir>/node_modules/@types"
  ],
  testRegex: ".e2e-spec.ts$",
  //testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  collectCoverageFrom: [
    "**/*.(t|j)s"
  ],
  coverageDirectory: "../coverage"
};

// "jest": {

//
//     "moduleNameMapper": {
//     "^@common/(.*)$": "<rootDir>/common/$1",
//       "^@lib/(.*)$": "<rootDir>/lib/$1",
//       "^@api/(.*)$": "<rootDir>/api/$1",
//       "^@src/(.*)$": "<rootDir>/$1"
//   },


// }
