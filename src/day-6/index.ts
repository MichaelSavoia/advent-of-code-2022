import { getInput } from "../utils";

const data = getInput(__dirname);

// Same function is used for both parts, the only difference is the number of
// unique characters is required to qualify as a mark

function getMarkerAfterUniqueSequence(
	input: string,
	uniqueSequenceLength: number
) {
	const characters = input.split("");

	let indicators: string[] = [];
	let i = 0;

	while (indicators.length < uniqueSequenceLength) {
		for (let j = i; j < i + uniqueSequenceLength; j++) {
			const char = characters[j];

			if (indicators.includes(char)) {
				indicators = [];
				break;
			}

			indicators.push(char);
		}
		i++;
	}

	return i + uniqueSequenceLength - 1;
}

// Part 1

export function solution1(input: string) {
	return getMarkerAfterUniqueSequence(input, 4);
}

// console.log(solution1(data));

// Part 2

export function solution2(input: string) {
	return getMarkerAfterUniqueSequence(input, 14);
}

// console.log(solution2(data));
