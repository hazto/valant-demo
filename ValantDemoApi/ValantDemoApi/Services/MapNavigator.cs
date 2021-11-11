using System.Collections.Generic;
using System.Linq;

public class MapNavigator {
    
    
    // public IEnumerable<string> GetAvailableMoves(MazeMap map, MapCoordinate from) {
    //     List<string> moves = new List<string>();
    // }    
    
    // private bool isAvailableMove(MazeMap map, MapCoordinate from, Direction direction){
    //     MapCoordinate destination = movePosition(from, direction);

    //     bool isValidMove = map.paths
    //         .Where(p => p.x == destination.x && p.y == destination.y)
    //         .Any();

    //     return isValidMove;
    // }

    // private MapCoordinate movePosition(MapCoordinate position, Direction direction) {
    //     // North and South are y - 1 and + 1, respectively
    //     // West and East are x - 1 and + 1, respectively
    //     MapCoordinate destination = new MapCoordinate { x = position.x, y = position.y };

    //     if (direction == Direction.North) {
    //         destination.y -= 1;
    //     }

    //     else if (direction == Direction.South) {
    //         destination.y += 1;
    //     } 

    //     else if (direction == Direction.West) {
    //         destination.x -= 1;
    //     }

    //     else {
    //         destination.x += 1;
    //     }
        
    //     return destination;
    // }

}