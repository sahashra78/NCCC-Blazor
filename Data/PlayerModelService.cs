using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using Newtonsoft.Json;
using System.Net;

namespace NCCC_Blazor.Data
{
    public class PlayerModelService
    {
        //public List<PlayerModel> player;
        public Task<PlayerList[]> GetPlayers()
        {
            string json = System.IO.File.ReadAllText("C:/Users/kisan/source/repos/NCCC-Blazor/Data/PlayersList.json");
            
            PlayerList player = Newtonsoft.Json.JsonConvert.DeserializeObject<PlayerList>(json);
            
            //PlayerModel userCopy = System.Text.Json.JsonSerializer.Deserialize<PlayerModel>(json);

            return Task.FromResult(Enumerable.Range(1, player.PlayerModel.Count()).Select(index => new PlayerList
            {
                PlayerModel = player.PlayerModel
            }).ToArray());

        }

    }
}
