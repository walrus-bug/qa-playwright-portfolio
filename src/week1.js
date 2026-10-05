"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testerName = "Valter";
const yearsInQA = 7;
const isLearningAutomation = true;
function introduceTester(name, years) {
    return `${name} has ${years} years of QA experience.`;
}
console.log(introduceTester(testerName, yearsInQA));
console.log(`Learning automation: ${isLearningAutomation}`);
const skillsToLearn = [
    "TypeScript",
    "Playwright",
    "API testing",
    "SQL",
];
for (const skill of skillsToLearn) {
    console.log(`I am learning: ${skill}`);
}
function canApplyForAutomationRole(hasCompletedPortfolio) {
    return hasCompletedPortfolio;
}
console.log(`Ready to apply: ${canApplyForAutomationRole(false)}`);
//# sourceMappingURL=week1.js.map