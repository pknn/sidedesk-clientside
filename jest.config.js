module.exports = {
  setupFilesAfterEnv: ['./enzyme.config.ts'],
  moduleNameMapper: {
    'app/(.*)': '<rootDir>/src/$1',
  },
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      compiler: 'ttypescript',
    },
  },
}
