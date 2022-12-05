import { add, getInput } from "../utils";

const data = getInput(__dirname);

function getRucksacks(input: string) {
	return input.trim().split("\n");
}

const CHARACTER_PRIORITY_ORDER =
	"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function getPriority(item: string) {
	const charIndex = CHARACTER_PRIORITY_ORDER.findIndex((char) => char === item);

	return charIndex + 1;
}

function getSharedItem(itemGroups: string[]) {
	const splitItemGroups = itemGroups.map((itemGroup) => itemGroup.split(""));

	return splitItemGroups.reduce((acc, itemGroup) =>
		acc.filter((item) => itemGroup.includes(item))
	)[0];
}

// Part 1

function splitRucksack(rucksack: string) {
	const middleIndex = rucksack.length / 2;

	return [rucksack.slice(0, middleIndex), rucksack.slice(middleIndex)];
}

export function solution1(input: string) {
	const commonItemPriorities = getRucksacks(input)
		.map((rucksack) => splitRucksack(rucksack))
		.map((compartment) => getSharedItem(compartment))
		.map((commonItem) => getPriority(commonItem));

	return add(commonItemPriorities);
}

// console.log(solution1(data));

// Part 2

function getGroups(items: string[]) {
	const groups: string[][] = [];

	let currentGroup: string[] = [];
	items.forEach((item) => {
		currentGroup.push(item);

		if (currentGroup.length === 3) {
			groups.push(currentGroup);
			currentGroup = [];
		}
	});

	return groups;
}

export function solution2(input: string) {
	const rucksacks = getRucksacks(input);
	const commonItemPriorities = getGroups(rucksacks)
		.map((group) => getSharedItem(group))
		.map((commonItem) => getPriority(commonItem));

	return add(commonItemPriorities);
}

// console.log(solution2(data));
