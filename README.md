# Playwright Fixture Bug

This is a minimal reproduction of a test suite in our company, which recently started taking advantage of custom Playwright fixtures. One of the custom fixtures intercepts requests by calling `context.route(...)`, and to make sure this happens globally, the base `browser` fixture is extended so any newly created browser contexts also call `context.route(...)`. However, after implementing this fixture, it was no longer possible to use the "Show browser" option when running tests via VSCode. Running tests via the command line using the `--headed` option seems to be unaffected.

## Reproduction Steps

1. Clone the repository at "https://github.com/ewendc/playwright-fixture-bug".
2. Open the cloned repository in VSCode.
3. Execute the command `npm install` in the terminal.
4. In the "Testing" editor panel under the "Playwright" heading, make sure the "Show browser" option is checked.
5. Using the "Testing" editor panel, run all tests in the "withoutFixture.spec.js" file, and verify that the tests pass and that the browser used by the test is visible.
6. Using the same panel, run all tests in the "withFixture.spec.js" file.

## Expected Behaviour

"test with extended browser fixture" should pass, as it is an identical copy of "test with no custom fixtures" which already passed.

## Actual Behaviour

The error `TypeError: browser._newContextForReuse is not a function` is outputted to the console when trying to run the tests in the "withFixture.spec.js" file while "Show browser" is enabled
