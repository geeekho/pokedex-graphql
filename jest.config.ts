import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // Map @/ to ./src/
  },
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  clearMocks: true,
  collectCoverage: true,
  testPathIgnorePatterns: ['/node_modules/', '.next', '/.next/', '/out/'],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}', // Collect coverage for all JavaScript/TypeScript files in the root and subfolders
    '!**/*.d.ts', // Exclude TypeScript declaration files
    '!**/index.{js,ts,jsx,tsx}', // Optionally exclude index files
    '!components/test/**', // Exclude the test directory inside components
    'components/test/ClientPokemonCard.tsx', // Exclude the test directory inside components
    'components/test/PokemonPage.tsx', // Exclude the test directory inside components
    '!app/[filter]/page.tsx', // Exclude the test directory inside components
    '!components/pokemon/PokemonCard.tsx', // Exclude the test directory inside components
    '!stories/**', // Exclude the stories directory (e.g., Storybook stories)
    '!types/**', // Exclude the types directory
    '!providers/**', // Exclude the providers directory
    '!schema/**', // Exclude the schema directory
    '!utils/**', // Exclude the utils directory
    '!lib/**', // Exclude the lib directory
    '!.next/**', // Exclude the lib directory
    '!node_modules/**', // Exclude the lib directory
    '!.storybook/**',
    '!coverage/**',
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
