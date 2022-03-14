// module.exports = {
//   verbose: true,
//   preset: 'ts-jest',
//   testEnvironment: 'node',
//   moduleFileExtensions: ['js', 'json', 'ts', '.d.ts', 'jsx'],
//   rootDir: './',
//   // roots: ['<rootDir>'],
//   modulePaths: [
//     // '<rootDir>',
//     'node_modules'
//   ],
//   moduleNameMapper: {
//     // 'cls-hooked': '<rootDir>/node_modules/@types',
//     // 'cls-hooked': '<rootDir>/node_modules/@types/cls-hooked',
//     'cls-hooked': '<rootDir>/node_modules/@types/cls-hooked/index.d.ts',
//   },
//   moduleDirectories: [
//     // 'node_modules',
//     // '.',
//     //   "<rootDir>/node_modules",
//     //   "node_modules/@types",
//     // "<rootDir>/node_modules/@types"
//   ],
//   testRegex: '.e2e-spec.ts$',
//   transform: {
//     // '^.+\\.(t|j)s$': 'ts-jest',
//     // '^/node_modules/@types/cls-hooked/.+\\.(t|j)s$': 'babel-jest',
//   },
//   transformIgnorePatterns: [
//     "/node_modules/@types/cls-hooked"
//   ],
//   collectCoverageFrom: ['**/*.(t|j)s'],
//   coverageDirectory: '../coverage',
// };
module.exports = {
  // verbose: true,
  // preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'ts'],
  // rootDir: 'src',
  rootDir: './',
  // // roots: ['<rootDir>'],
  // modulePaths: [
  //   // '<rootDir>',
  //   'node_modules'
  // ],
  // moduleNameMapper: {
  //   // 'cls-hooked': '<rootDir>/node_modules/@types',
  //   // 'cls-hooked': '<rootDir>/node_modules/@types/cls-hooked',
  //   'cls-hooked': '<rootDir>/node_modules/@types/cls-hooked/index.d.ts',
  // },
  // moduleDirectories: [
  //   // 'node_modules',
  //   // '.',
  //   //   "<rootDir>/node_modules",
  //   //   "node_modules/@types",
  //   // "<rootDir>/node_modules/@types"
  // ],
  testRegex: '.e2e-spec.ts$',
  // testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
    // '^/node_modules/@types/cls-hooked/.+\\.(t|j)s$': 'babel-jest',
  },
  // transformIgnorePatterns: [
  //   "/node_modules/@types/cls-hooked"
  // ],
  collectCoverageFrom: ['**/*.(t|j)s'],
  // coverageDirectory: '../coverage',
};
