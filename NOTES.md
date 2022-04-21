# Notes

Testing is about translating user interactions in code and doing the right asseertion.

## Test Types

- Unit test: testing a single unit of code
- Integration test: testing multiple units of code
- E2E test

## React Testing Library

- Query Priorities: https://testing-library.com/docs/queries/about#priority

## Pattern to Write Good Test

Arrange-Act-Assert

- Arrange. When you arranging things such as rendering the component
- Act. User events such as clicking, typing
- Assert. Where you make your assertion

## Takeaways

- if you don't do any assertion the test will passed
- when making assertion do the opposite (failing test first) and then make it so the test will passed
  - to make sure there is no bugs or strange things going on
