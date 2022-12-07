import { solution1, solution2 } from "./";

const input1 = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";
const input2 = "bvwbjplbgvbhsrlpgdmjqwftvncz";
const input3 = "nppdvjthqldpwncqszvftbrmjlhg";
const input4 = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
const input5 = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";

test("solution1", () => {
	expect(solution1(input1)).toBe(7);
	expect(solution1(input2)).toBe(5);
	expect(solution1(input3)).toBe(6);
	expect(solution1(input4)).toBe(10);
	expect(solution1(input5)).toBe(11);
});

test("solution2", () => {
	expect(solution2(input1)).toBe(19);
	expect(solution2(input2)).toBe(23);
	expect(solution2(input3)).toBe(23);
	expect(solution2(input4)).toBe(29);
	expect(solution2(input5)).toBe(26);
});
