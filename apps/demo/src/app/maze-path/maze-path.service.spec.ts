import { TestBed } from '@angular/core/testing';
import { Coordinate, East, Maze, North, South, West } from '../app.model';

import { MazePathService } from './maze-path.service';

describe('MazePathService', () => {
  let service: MazePathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MazePathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMoves: One direction available', () => {
    it('should allow only S move when N, E, W are walls', () => {
      const maze = getTestMazeVertical(); // path down the middle top to bottom
      const currentPosition: Coordinate = { x: 2, y: 0 }; // start at the north

      const expected = [South];
      const actual = service.getMoves(maze, currentPosition); 

      expect(actual).toEqual(expected);
    });

    it('should allow only E move when W, N, and S are walls', () => {
      const maze = getTestMazeHorizontal(); // path left to right
      const currentPosition: Coordinate = { x: 0, y: 2 }; // start at the west

      const expected = [East];
      const actual = service.getMoves(maze, currentPosition);

      expect(actual).toEqual(expected);
    });

    it('should allow only N moves when W, E, and S are walls', () => {
      const maze = getTestMazeVertical();
      const currentPosition: Coordinate = { x: 2, y: 4 }; // start at the south

      const expected = [North];
      const actual = service.getMoves(maze, currentPosition);

      expect(actual.sort()).toEqual(expected.sort());
    });

    it('should allow only W move when N, E, S are walls', () => {
      const maze = getTestMazeHorizontal(); // path left to right
      const currentPosition: Coordinate = { x: 4, y: 2 }; // start at the east

      const expected = [West];
      const actual = service.getMoves(maze, currentPosition); 

      expect(actual).toEqual(expected);
    });
  })

  describe('getMoves: 2 opposite directions available', () => {
    it('should allow W and E move when N, and S are walls', () => {
      const maze = getTestMazeHorizontal(); // path left to right, 5 tiles
      const currentPosition: Coordinate = { x: 2, y: 2 }; // start in the middle

      const expected = [West, East];
      const actual = service.getMoves(maze, currentPosition);

      expect(actual.sort()).toEqual(expected.sort());
    });

    it('should allow N and S moves when E and W are walls', () => {
      const maze = getTestMazeVertical();
      const currentPosition: Coordinate = { x: 2, y: 3 }; // start in the middle

      const expected = [North, South];
      const actual = service.getMoves(maze, currentPosition);

      expect(actual.sort()).toEqual(expected.sort());
    });
  });

  describe('getMoves: 3 directions available', () => {
    it('should allow W, E, N move when  S are walls', () => {
      const maze = getTestMazeHorizontal(); // path left to right, 5 tiles
      maze.paths.push(getCoordinate(2,1)); // add a north path X00XX
      const currentPosition: Coordinate = { x: 2, y: 2 }; // start in the middle

      const expected = [West, East, North];
      const actual = service.getMoves(maze, currentPosition);

      expect(actual.sort()).toEqual(expected.sort());
    });
  });

  
});


/*************************** test data generation *****************************/ 


// maze with path stright across middle left to right
function getTestMazeHorizontal(): Maze {
  const maze: Maze = {
    width: 5,
    height: 5,
    paths: []
  }

  maze.paths.push(getCoordinate(0, 2));
  maze.paths.push(getCoordinate(1, 2));
  maze.paths.push(getCoordinate(2, 2));
  maze.paths.push(getCoordinate(3, 2));
  maze.paths.push(getCoordinate(4, 2));

  return maze;
}

// maze with path stright down middle
function getTestMazeVertical(): Maze {
  const maze: Maze = {
    width: 5,
    height: 5,
    paths: []
  }

  maze.paths.push(getCoordinate(2, 0));
  maze.paths.push(getCoordinate(2, 1));
  maze.paths.push(getCoordinate(2, 2));
  maze.paths.push(getCoordinate(2, 3));
  maze.paths.push(getCoordinate(2, 4));

  return maze;
}


function getCoordinate(x: number, y: number): Coordinate {
  return {
    x: x,
    y: y
  };
}
