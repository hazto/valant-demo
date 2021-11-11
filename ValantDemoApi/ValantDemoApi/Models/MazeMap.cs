
using System.Collections.Generic;

public class MazeMap {
    public string name {get;set;}
    public int width { get; set; }
    public int height { get; set; }
    public List<MapCoordinate> paths { get; set; }
}