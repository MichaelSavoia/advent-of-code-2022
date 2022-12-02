import { getInput, add } from "../utils";

const data = getInput(__dirname);

function formatInput(input: string) {
	return input
		.trim()
		.split("\n\n")
		.map((str) => str.split("\n").map(Number));
}

// Part 1

function getGreatestCaloriesTotal(input: string) {
	const elves = formatInput(input);
	return Math.max(...elves.map(add));
}

// console.log(`part 1: ${getGreatestCaloriesTotal(data)}`);
// console.log("---------------------------------------");

// Part 2

function getGreatestCaloriesTotalOfTopThree(input: string) {
	const elves = formatInput(input);
	const sortedSums = elves.map(add).sort((a, b) => b - a);

	return add(sortedSums.slice(0, 3));
}

// console.log(`part 2: ${getGreatestCaloriesTotalOfTopThree(data)}`);

export { getGreatestCaloriesTotal, getGreatestCaloriesTotalOfTopThree };
