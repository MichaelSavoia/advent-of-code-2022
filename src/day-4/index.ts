import { getInput } from "../utils";

const data = getInput(__dirname);

class Assignment {
	start;
	end;

	constructor(start: number, end: number) {
		this.start = start;
		this.end = end;
	}

	// For part 1
	contains = (assignment: Assignment) => {
		return this.start <= assignment.start && this.end >= assignment.end;
	};

	// For part 2
	overlaps = (assignment: Assignment) => {
		return this.start <= assignment.end && this.end >= assignment.start;
	};
}

function getPairedAssignments(input: string): Assignment[][] {
	return input
		.trim()
		.split("\n")
		.map((pair) =>
			pair.split(",").map((assignment) => {
				const [start, end] = assignment
					.split("-")
					.map((strNum) => parseInt(strNum, 10));
				return new Assignment(start, end);
			})
		);
}

// Part 1

export function solution1(input: string) {
	return getPairedAssignments(input)
		.map(([a, b]) => a.contains(b) || b.contains(a))
		.filter((contains) => contains).length;
}

// console.log(solution1(data));

// Part 2

export function solution2(input: string) {
	return getPairedAssignments(input)
		.map(([a, b]) => a.overlaps(b) || b.overlaps(a))
		.filter((contains) => contains).length;
}

// console.log(solution2(data));
