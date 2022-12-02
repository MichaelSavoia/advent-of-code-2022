# Typescript Advent of Code 2022

---

These are my solutions for the [Advent of Code](https://adventofcode.com/) challenges for 2022.

I am using Typescript for my solutions and ts-node to run them.

## Getting Started

---

While not required to run the solutions, use your favorite package manager to install deps to use my teeny little CLI and to run the tests.

This is how I end up solving the challenges:

- Pass in the input text we get from the challenge into the appropriate day's `input.txt` file.
- The challenge gives you an example input/output that we can use to create tests for inside of the day's `index.test.ts` file.
- Complete the challenge inside of the day's `index.ts` file.
- Run the tests using either the `test` or `test:watch` commands
- If we think we have the right answer run, console log the result of our solution in `index.ts` and run the `dev` command. From there, select the day you are solving and copy/paste the output into Advent of Code.
  - Alternatively we can `cd` into the directory of the day we are solving and run `ts-node` directly, but that makes me sad for my CLI
