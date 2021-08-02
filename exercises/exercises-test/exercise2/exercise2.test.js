const palindromo = require("./exercise2");
test("Check if the function palindromo is defined", () => {
    expect(palindromo).toBeDefined();
});

test("It is a palindromo", () => {
    expect(palindromo("otto")).toEqual(true);
});
test("It is not a palindromo", () => {
    expect(palindromo("roly")).toBe(false);
});