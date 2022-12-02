import { spawn } from "child_process";
import inquirer from "inquirer";

const daysChoices = [...Array(25).keys()].map((day) => `day-${day + 1}`);

inquirer
	.prompt([
		{
			type: "list",
			name: "day",
			choices: daysChoices,
		},
	])
	.then(({ day }: { day: string }) => {
		const run = spawn(`npx`, ["ts-node", `./src/${day}/index.ts`]);
		run.stdout.setEncoding("utf-8").on("data", (data) => {
			console.log(data);
		});
	});
