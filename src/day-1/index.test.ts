import {
	getGreatestCaloriesTotal,
	getGreatestCaloriesTotalOfTopThree,
} from "./index";

const input = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;

test("getGreatestCaloriesTotal", () => {
	expect(getGreatestCaloriesTotal(input)).toEqual(24000);
});

test("getGreatestCaloriesTotalOfTopThree", () => {
	expect(getGreatestCaloriesTotalOfTopThree(input)).toEqual(45000);
});
