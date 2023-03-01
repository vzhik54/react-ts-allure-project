module.exports = {
  testEnvironment: "jsdom",
  // transform: {
  //   '\\.(ts|js)x?$': ['ts-jest', { isolatedModules: true, }],
  // },
  globals: {},
  moduleNameMapper: {
    uuid: require.resolve("uuid"),
  },
  testRunner: "jest-jasmine2",
  preset: "ts-jest",
  setupFilesAfterEnv: ["./allure-setup.ts", "jest-extended/all"],
};
