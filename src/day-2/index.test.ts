import { getTotalPointsForPart1, getTotalPointsForPart2 } from "./index";

const input = `
A Y
B X
C Z
`;

test("part 1", () => {
	expect(getTotalPointsForPart1(input)).toEqual(15);
});

test("part 2", () => {
	expect(getTotalPointsForPart2(input)).toEqual(12);
});
