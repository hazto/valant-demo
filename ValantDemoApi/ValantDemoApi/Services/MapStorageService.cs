using System.Collections.Generic;
using System.Linq;

public static class MapStorageService {

    private static List<MazeMap> _maps = testMazes();
        
    public static void SaveMap(MazeMap map) {
        _maps.Add(map);
    }

    public static MazeMap GetMap(string name) {
        MazeMap map = _maps?
            .Where(m => m.name == name)
            .Select(m => m)
            .First();

        return map;
    }

    public static IList<MazeMap> GetMaps() {
        return _maps;
    }





////////////////////////////// test data //////////////////////////////////////
    private static List<MazeMap> testMazes() {
        List<MazeMap> testMazeList = new List<MazeMap>();
        
        
        testMazeList.Add(testMap("its a maze"));
        testMazeList.Add(testMap("ing"));

        return testMazeList;
    }

    private static MapCoordinate getCoord(int x, int y, bool isStart = false, bool isFinish = false) {
        return new MapCoordinate { x = x, y = y, isStart = isStart, isFinish = isFinish };
    }

    private static MazeMap testMap(string name) {
        MazeMap map1 = new MazeMap { width = 5, height = 5, name = name };
        map1.paths = new List<MapCoordinate>();
        map1.paths.Add(getCoord(4,0, true));
        map1.paths.Add(getCoord(4,1));
        map1.paths.Add(getCoord(4,2));
        map1.paths.Add(getCoord(4,3));
        map1.paths.Add(getCoord(4,4, false, true));

        return map1;

    }

    

    
}