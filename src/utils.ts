import fs from "fs";
import path from "path";

export function getInput(dir: string) {
	return fs.readFileSync(path.resolve(dir, "./input.txt"), {
		encoding: "utf-8",
	});
}

export function add(input: number[]) {
	return input.reduce((total, number) => (total += number), 0);
}
