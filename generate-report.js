const { generate } = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber_report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version": "1.0.0",
        "Test Environment": "STAGING",
        "Browser": "Chrome  81.0.4044.122",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

generate(options);