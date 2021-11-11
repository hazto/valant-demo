using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;

namespace ValantDemoApi.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class MazeController : ControllerBase
    {
        private readonly ILogger<MazeController> _logger; 

        public MazeController(ILogger<MazeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("maze/moves")]
        public IEnumerable<string> GetNextAvailableMoves()
        {
            // a static list, apparently
            return new List<string> {"Up", "Down", "Left", "Right"};
        }

        [HttpPost]
        [Route("maze/upload")]
        public void UploadMap([FromBody]MazeMap map) {
            MapStorageService.SaveMap(map);
        }

        [HttpGet]
        [Route("maze/list")]
        public IEnumerable<string> ListMaps() {
            List<string> mapNames = MapStorageService
                .GetMaps()
                .Select(m => m.name)
                .ToList();

            return mapNames;
        }

        [HttpGet]
        [Route("maze/load")]
        public MazeMap GetMaze(string mazeName) {
            MazeMap maze = MapStorageService.GetMap(mazeName);

            return maze;    
        }
    }
}
