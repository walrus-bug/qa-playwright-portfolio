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
        status: "Failed"
    },
];
for (const testCase of testSuite) {
    console.log(`${testCase.id} - ${testCase.status} - ${testCase.title}`);
}
//# sourceMappingURL=week1-test-suite.js.map