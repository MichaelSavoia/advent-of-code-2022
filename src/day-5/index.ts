import { getInput } from "../utils";

const data = getInput(__dirname);

class Stack<T extends unknown> {
	values: T[] = [];

	push(item: T) {
		this.values.push(item);
	}

	pop() {
		if (this.isEmpty) {
			throw new Error("Attempted to prop item from stack but stack is empty");
		}

		return this.values.pop() as T;
	}

	top() {
		return this.values[this.values.length - 1];
	}

	get isEmpty() {
		return this.values.length === 0;
	}
}

function parseStacks(input: string) {
	const [stacksStr] = input.split("\n\n");
	const splitStackStr = stacksStr.split("\n").reverse().slice(1);

	// 0 index of stacks after reversing and removing the label layer is the base layer
	const numOfStacks = splitStackStr[0].split(" ").length;

	const stacks: Stack<string>[] = Array(numOfStacks)
		.fill("")
		.map(() => new Stack());
	splitStackStr.forEach((row) => {
		// gross RegExs to reduce row down to only the crate labels with spaces
		// acting as a signifier for there being no crate in that column for the given row
		let parsedRow = `${row}`
			.replaceAll(/\s{4}/g, " ")
			.replaceAll(/\[|\] |\]/g, "")
			.split("");

		parsedRow.forEach((crate, index) => {
			if (crate === " ") {
				return;
			}

			const stack = stacks[index];
			stack.push(crate);
		});
	});

	return stacks;
}

function parseMoves(input: string) {
	const [_, movesStr] = input.split("\n\n");
	const moves = movesStr
		.trim()
		.split("\n")
		.map((moveStr) => {
			const [quantity, from, to] = moveStr
				.replace("move ", "")
				.replace(" from ", "-")
				.replace(" to ", "-")
				.split("-")
				.map((numStr) => parseInt(numStr, 10));

			return {
				quantity,
				from,
				to,
			};
		});

	return moves;
}

// Part 1

function parseInput(input: string) {
	return {
		stacks: parseStacks(input),
		moves: parseMoves(input),
	};
}

export function solution1(input: string) {
	const { stacks, moves } = parseInput(input);

	moves.forEach(({ quantity, from, to }) => {
		const fromStack = stacks[from - 1];
		const toStack = stacks[to - 1];

		for (let i = 0; i < quantity; i++) {
			const crate = fromStack.pop();
			toStack.push(crate);
		}
	});

	return stacks.map((stack) => stack.top()).join("");
}

// console.log(solution1(data));

// Part 2

export function solution2(input: string) {
	const { stacks, moves } = parseInput(input);

	moves.forEach(({ quantity, from, to }) => {
		const fromStack = stacks[from - 1];
		const toStack = stacks[to - 1];

		const tempStack = new Stack<string>();

		for (let i = 0; i < quantity; i++) {
			const crate = fromStack.pop();
			tempStack.push(crate);
		}

		while (!tempStack.isEmpty) {
			const crate = tempStack.pop();
			toStack.push(crate);
		}
	});

	return stacks.map((stack) => stack.top()).join("");
}

// console.log(solution2(data));
