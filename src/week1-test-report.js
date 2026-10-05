"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testSuite = [
    {
        id: "TC-001",
        title: "User can log in with valid credentials",
        priority: "High",
        status: "Passed",
    },
    {
        id: "TC-002",
        title: "User cannot log in with invalid credentials",
        priority: "High",
        status: "Passed",
    },
    {
        id: "TC-003",
        title: "User sees an error when the email is blank",
        priority: "Medium",
        status: "Not Run",
    },
    {
        id: "TC-004",
        title: "Locked user cannot log in",
        priority: "High",
        status: "Failed",
    },
];
const passedTests = testSuite.filter((testCase) => testCase.status === "Passed");
const failedTests = testSuite.filter((testCase) => testCase.status === "Failed");
const notRunTests = testSuite.filter((testCase) => testCase.status === "Not Run");
console.log(`Total tests: ${testSuite.length}`);
console.log(`Passed: ${passedTests.length}`);
console.log(`Failed: ${failedTests.length}`);
console.log(`Not run: ${notRunTests.length}`);
console.log("\nFailed tests:");
for (const testCase of failedTests) {
    console.log(`${testCase.id}: ${testCase.title}`);
}
//# sourceMappingURL=week1-test-report.js.map