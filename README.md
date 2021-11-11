# Valant

This project was generated using [Nx](https://nx.dev).

[Nx Documentation](https://nx.dev/angular)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Install and run

The steps for installation and running are unchanged.

### Install

Run `npm install` to install the UI project dependencies. Grab a cup of coffee or your beverage of choice.
You may also need to run `npm install start-server-and-test` and `npm install cross-env`

As you build new controller endpoints you can auto generate the api http client code for angular using `npm run generate-client:server-app`

### Build

Run `ng build demo` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Run 

Run `npm run start` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Running unit tests

- Run `ng test demo` to execute the unit tests via [Jest](https://jestjs.io).
- Run `nx affected:test` to execute the unit tests affected by a change.
- Run `npm run test:all` to run all unit tests in watch mode. They will re-run automatically as you make changes that affect the tests.

## Current state

Obviously, this isn't finished.  As a coding assessment, it's an opportunity to showcase skills, training, and cognizance, so I wanted to present -- as the assessment description notes -- clean, maintainable code rather than a couple hours of keyboard face-rolls.

### Approach

Generally my approach is to focus on a functionality, quickly get it to a known working state, refactor it into something slightly more sane, and finally style it.  There are test data stubs in various places to this end; these eventually would be migrated to the test suites.

### Maze navigation

It wasn't clear to me if it was expected that the maze engine business logic was to reside on the server, requiring requests back and forth for every move, or to let the SPA run the engine. The initial controller method GetAvailableMoves() that returns what seemed to be a static list of direction strings and a test that expressed a requirement that it always have all four directions all seemed a bit odd.  It could have been a hint or it could have simply been an example.

This being said, it also wasn't clear if the user was to get all four directions as an option every time, regardless of where they had already travelled in the map.  Perhaps they would have a paper and pencil to track their progress?  A memory game?  Without the agile process of being able to ask clarifying questions about requirements, I forged ahead with a navigator concept that presents only the directions available.

### Maze storage

For the sake of brevity, the 'persistence layer' is just a static class with a variable.  It would have been simple enough to write the json files to disk, but this might have yielded the permissions tangles of letting an unknown process write to disk.  

### App component

Following my general approach getting something to work first and refactor it, app component served as the sandbox.  The plan was to encapsulate various components once their dependencies were known.

### Styling

Again, using the get-it-working-first-then-style-it approach, there isn't much in the way of HTML or LESS.




