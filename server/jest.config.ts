import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  verbose: true,
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  silent: true,
  moduleFileExtensions: ['ts', 'js'],
  testPathIgnorePatterns: ['/node_modules/'],
};

export default config;