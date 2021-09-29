const path = require('path')

module.exports = {
  rootDir: path.resolve(process.cwd()),
  verbose: true,
  // automock: false,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageReporters: ['html', 'json', 'lcov', 'text-summary', 'cobertura'],
  coverageDirectory: '<rootDir>/coverage',
  transform: {
    '^.+.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: path.resolve(__dirname, './babel.config.js') }],
  },
}
