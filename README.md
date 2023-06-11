# Purpose
This is an example Express.js app template designed to comply secure development best practices.

As an example, I have implemented a simple REST API for fetching some data from Binance, like current price or order book.

# Usage
To start:
```bash
npm run start
```

For unit testing:
```bash
npm run test:unit
```


# Notable configurations
## jest.config.js
Jest is a well-known testing library. According to my configuration:
- Tests will about whenever one of them fails
- Tests will run in a random order (within a test file)
- Code coverage is collected

## Husky, prettier and linter
Extending Google + Sonarqube's eslint rules to follow their best practices.

Also using prettier to format code as if they are written by same developer.

Finally, to enforce these before each commit, using Husky and pre-commit hooks. Optionally, you can tell Husky to run tests (at least unit tests) before any commit.

## Jsdoc
Using Jsdoc for documentation. Also you can export them as html files for navigating documentation easily via browser.


# Notes for Future
- Implement authorization with Casbin
- Caching via Mongo DB / Postgresql / Redis can be added
