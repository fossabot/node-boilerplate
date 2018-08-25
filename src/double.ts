// Represents the code imported into executing code. There can be no executing code
// at the top level of this file, or the tests will execute it while they import,
// throwing off code coverage and causing system side effects.

export type Doubler = (x: number) => number;

export const double: Doubler = (x: number) => {
    return x * 2;
};
