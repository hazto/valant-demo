import { Injectable } from '@angular/core';
import { Coordinate, 
  Maze, 
  Direction, 
  North, 
  South, 
  East, 
  West, 
  AllDirections 
} from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class MazePathService {

  constructor() { }

  public getMoves(maze: Maze, from: Coordinate): Direction[] {
    const availableMoves = [];

    for(const direction of Object.values(AllDirections)) {
      // console.log('huh?', direction)
      if (this.canMove(maze, from, direction as Direction)) {
        availableMoves.push(direction);
      }
    }

    return availableMoves;
  }

  private canMove(maze: Maze, from: Coordinate, direction: Direction): boolean {
    const destination: Coordinate = Object.assign({}, from);
    this.moveInDirection[direction](destination);

    const canMove: boolean = !!maze.paths.find(p => p.x === destination.x && p.y === destination.y);

    return canMove;
  }

  private moveInDirection: { [key: string]: (coord: Coordinate) => Coordinate } = {
    [North]: coord => { coord.y -= 1; return coord; },
    [South]: coord => { coord.y += 1; return coord; },
    [East]: coord => { coord.x += 1; return coord; },
    [West]: coord => { coord.x -= 1; return coord; }
  };
}


