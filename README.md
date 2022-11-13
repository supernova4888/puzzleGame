# Picture Puzzle Game

This is a classic puzzle game where all pieces are shuffled and need to be put in proper order in the 3x3 canvas.

The purpose was to demonstrate my abilities in vanilla javascript for a recruitment process.

The provided starter kit was used. It includes Jest, Babel, Sass, and webpack. The game was written in vanilla javascript only, no utility libraries were used. It is functional in Chrome.

The implementation was focused on key functionalities for the game to work, therefore only minimal CSS configuration was implemented. I have tried to implement all the requirements as mcuh as possible but unfortunately due to time constraints the game is not entirely complete. Future improvements are listed below.

Future improvements:

- Fix drag & drop bug;
- Implement checker to assess if player concluded the puzzle;
- Implement modal 'congratulating' player in case of success and restart the game automatically;
- Additional nice to have features:
  - Allow player to add custom images;
  - Possibility to increase level of difficulty;
  - Live score board;

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or newer)

## Development

First install dependencies:

```sh
npm install
```

### Running in development mode

To start the project in development mode:

```sh
npm start
```

### Testing

To run unit tests:

```sh
npm test
```

## Deployment

To create a production build:

```sh
npm run build
```

Preview the production build locally:

```sh
npx http-serve dist
```
