module.exports = {
  setupFilesAfterEnv: ['./enzyme.config.ts'],
  moduleNameMapper: {
    'app/(.*)': '<rootDir>/src/$1',
  },
}
