const jestConfig = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@root/(.*)$': '<rootDir>/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@public/(.*)$': '<rootDir>/src/public/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@components$': '<rootDir>/src/components',
    '^@helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^@helpers$': '<rootDir>/src/helpers',
    '^@context/(.*)$': '<rootDir>/src/context/$1',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '/^.+.(css|less|scss|sass)$/': 'identity-obj-proxy',
  },
};

export default jestConfig;
