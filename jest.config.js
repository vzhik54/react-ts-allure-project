module.exports = {
  testEnvironment: "jsdom",
// transform: {
//   '\\.(ts|js)x?$': ['ts-jest', { isolatedModules: true, }],
// },
  globals: {
    'ts-jest': {
    isolatedModules: true,
    },
  },
  moduleNameMapper: {
    'uuid': require.resolve('uuid'),
  },
  testRunner: "jest-jasmine2",
  preset: "ts-jest",
  setupFilesAfterEnv: [
    "./allure-setup.ts",
  ],
};