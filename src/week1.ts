const testerName: string = "Valter";
const yearsInQA: number = 7;
const isLearningAutomation: boolean = true;

function introduceTester(name: string, years: number): string {
  return `${name} has ${years} years of QA experience.`;
}

console.log(introduceTester(testerName, yearsInQA));
console.log(`Learning automation: ${isLearningAutomation}`);