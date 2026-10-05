const testerName: string = "Valter";
const yearsInQA: number = 7;
const isLearningAutomation: boolean = true;

function introduceTester(name: string, years: number): string {
  return `${name} has ${years} years of QA experience.`;
}

console.log(introduceTester(testerName, yearsInQA));
console.log(`Learning automation: ${isLearningAutomation}`);

const skillsToLearn: string[] = [
  "TypeScript",
  "Playwright",
  "API testing",
  "SQL",
];

for (const skill of skillsToLearn) {
  console.log(`I am learning: ${skill}`);
}

function canApplyForAutomationRole(
  hasCompletedPortfolio: boolean
): boolean {
  return hasCompletedPortfolio;
}

console.log(
  `Ready to apply: ${canApplyForAutomationRole(false)}`
);