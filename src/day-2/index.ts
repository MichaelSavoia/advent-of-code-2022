import { getInput, add } from "../utils";

const data = getInput(__dirname);

function getRounds(input: string) {
	return input
		.trim()
		.split("\n")
		.map((str) => str.split(" "));
}

// Opponent Plays:
// A = Rock
// B = Paper
// C = Scissors

// Self Plays:
// X = Rock (1pt)
// Y = Paper (2pt)
// Z = Scissors (3pt)

const SELF_TO_POINTS_MAP = {
	X: 1,
	Y: 2,
	Z: 3,
} as const;

const RESULT_TO_POINTS_MAP = {
	loss: 0,
	draw: 3,
	win: 6,
} as const;

// Part 1

const OPPONENT_TO_SELF_RESULT_MAP = {
	A: {
		X: "draw",
		Y: "win",
		Z: "loss",
	},
	B: {
		X: "loss",
		Y: "draw",
		Z: "win",
	},
	C: {
		X: "win",
		Y: "loss",
		Z: "draw",
	},
} as const;

function getTotalPointsForPart1(input: string) {
	const rounds = getRounds(input).map((round) => {
		const opponent = round[0] as "A" | "B" | "C";
		const self = round[1] as "X" | "Y" | "Z";

		return { opponent, self };
	});

	const roundPoints = rounds
		.map(({ opponent, self }) => ({
			self,
			result: OPPONENT_TO_SELF_RESULT_MAP[opponent][self],
		}))
		.map(
			({ self, result }) =>
				SELF_TO_POINTS_MAP[self] + RESULT_TO_POINTS_MAP[result]
		);

	return add(roundPoints);
}

// console.log("part 1: ", getTotalPointsForPart1(data));
// console.log("---------------------------------------");

// Part 2

const DESIRED_RESULT_TO_RESULT_MAP = {
	X: "loss",
	Y: "draw",
	Z: "win",
} as const;

// Opponent Plays:
// A = Rock
// B = Paper
// C = Scissors

// Self Plays:
// X = Rock (1pt)
// Y = Paper (2pt)
// Z = Scissors (3pt)

const OPPONENT_TO_DESIRED_RESULT_TO_SELF_MAP = {
	A: {
		X: "Z",
		Y: "X",
		Z: "Y",
	},
	B: {
		X: "X",
		Y: "Y",
		Z: "Z",
	},
	C: {
		X: "Y",
		Y: "Z",
		Z: "X",
	},
} as const;

function getTotalPointsForPart2(input: string) {
	const rounds = getRounds(input).map((round) => {
		const opponent = round[0] as "A" | "B" | "C";
		const desiredResult = round[1] as "X" | "Y" | "Z";

		return { opponent, desiredResult };
	});

	const roundPoints = rounds
		.map(({ opponent, desiredResult }) => ({
			self: OPPONENT_TO_DESIRED_RESULT_TO_SELF_MAP[opponent][desiredResult],
			result: DESIRED_RESULT_TO_RESULT_MAP[desiredResult],
		}))
		.map(
			({ self, result }) =>
				SELF_TO_POINTS_MAP[self] + RESULT_TO_POINTS_MAP[result]
		);

	return add(roundPoints);
}

// console.log("part 2: ", getTotalPointsForPart2(data));

export { getTotalPointsForPart1, getTotalPointsForPart2 };
