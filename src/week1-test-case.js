"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loginTest = {
    id: "TC-001",
    title: "User cannot log in with invalid credentials",
    priority: "High",
    status: "Failed",
};
function showTestCase(testCase) {
    return `${testCase.id}: ${testCase.title} | Priority: ${testCase.priority} | Status: ${testCase.status}`;
}
console.log(showTestCase(loginTest));
//# sourceMappingURL=week1-test-case.js.map