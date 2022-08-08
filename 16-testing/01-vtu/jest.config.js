/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],

  // To import .vue files without extension (optional)
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'vue'],

  transform: {
    // Support Vue SFC
    '^.+\\.vue$': require.resolve('vue-jest'),
    // Use babel for ES modules support in Jest and JSX
    '^.+\\.jsx?$': require.resolve('babel-jest'),
    // Ignore assets
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': require.resolve('jest-transform-stub'),
  },
  // Dependencies are usually in CommonJS modules
  transformIgnorePatterns: ['/node_modules/'],

  moduleNameMapper: {
    // Support the same @ -> src alias mapping in source code (optional)
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  testEnvironment: 'jsdom',

  // Serializer for Vue snapshots
  snapshotSerializers: ['jest-serializer-vue'],

  // Add taskbook utilities
  // setupFilesAfterEnv: ['<rootDir>/utility_modules/taskbook-jest-setup.js'],

  testMatch: ['**/tests/unit/**/*.spec.[jt]s?(x)', '**/__tests__/*.[jt]s?(x)'],

  // https://github.com/facebook/jest/issues/6766
  testURL: 'http://localhost/',

  watchPlugins: [require.resolve('jest-watch-typeahead/filename'), require.resolve('jest-watch-typeahead/testname')],

  clearMocks: true,
};
