const readlineSync = require("readline-sync");

function calculateMinimumBuses(n, familyMembers) {
  n = parseInt(n);
  familyMembers = familyMembers.split(" ").map(Number);

  if (n !== familyMembers.length) {
    return "Input must be equal with count of family";
  }

  familyMembers.sort((a, b) => a - b);

  let busCount = 0;
  let left = 0;
  let right = familyMembers.length - 1;

  while (left <= right) {
    if (familyMembers[left] + familyMembers[right] <= 4) {
      left++;
    }
    right--;
    busCount++;
  }

  return `Minimum bus required is : ${busCount}`;
}

const n = readlineSync.question("Input the number of families: ");
const familyMembers = readlineSync.question(
  "Input the number of members in the family (separated by a space): "
);

console.log(calculateMinimumBuses(n, familyMembers));
