export default {
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@providers(.*)$': '<rootDir>/src/infra/providers/$1',
    '^@domain(.*)$': '<rootDir>/src/domain/$1',
    '^@infra(.*)$': '<rootDir>/src/infra/$1',
    '^@repositories(.*)$': '<rootDir>/src/infra/repositories/$1',
    '^@controllers(.*)$': '<rootDir>/src/presentation/controllers/$1',
    '^@schemas(.*)$': '<rootDir>/src/shared/schemas/$1',
    '^@shared(.*)$': '<rootDir>/src/shared/$1',
    '^@decorators(.*)$': '<rootDir>/src/presentation/decorators/$1',
    '^@test(.*)$': '<rootDir>/test/$1',
  },
};
