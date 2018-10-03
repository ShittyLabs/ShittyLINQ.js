# Contributing to ShittyLINQ.js

1. Read the [Code of Conduct](./CODE_OF_CONDUCT.md)
1. If adding a new method, follow the [new method instructions](#adding-a-new-method)

## Adding a new method
1. If an issue exists for this method, add a comment to let everyone know that you are implementing it. This helps us avoid duplicates.
1. Fork the repo if you haven't done so already.
1. Create a branch from an up-to-date `develop` branch.
1. Add a file at `./src/<method name>.js`.
1. Implement the method.
1. Document the method using standard JSDoc documentation syntax.
1. Import and bind the method to `Array.prototype` in `index.js`
1. [Add tests](#adding-a-set-of-tests).
1. Push branch to your fork.
1. Create a pull request against the `develop` branch of the main repo.

## Adding a set of tests
1. Add a file at `./test/<method name>.spec.js`.
1. Add tests for success conditions.
1. Add tests for failure conditions according to the MDN documents for the method you are adding. Ensure the proper errors are thrown.
