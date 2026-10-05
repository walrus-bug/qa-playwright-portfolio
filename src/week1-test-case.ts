interface TestCase {
  id: string;
  title: string;
  priority: "High" | "Medium" | "Low";
  status: "Passed" | "Failed" | "Not Run";
}

const loginTest: TestCase = {
  id: "TC-001",
  title: "User cannot log in with invalid credentials",
  priority: "High",
  status: "Failed",
};

function showTestCase(testCase: TestCase): string {
  return `${testCase.id}: ${testCase.title} | Priority: ${testCase.priority} | Status: ${testCase.status}`;
}

console.log(showTestCase(loginTest));