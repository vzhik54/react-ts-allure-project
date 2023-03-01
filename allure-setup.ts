import { JasmineAllureReporter } from "allure-jasmine";

const reporter = new JasmineAllureReporter({ resultsDir: "allure-results" });
jasmine.getEnv().addReporter(reporter);
global.allure = reporter.getInterface();
