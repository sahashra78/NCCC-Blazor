using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using Newtonsoft.Json;
using System.Net;
using System.IO;
using System.Text;
using System.Diagnostics;
using ChoETL;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace NCCC_Blazor.Data
{
    public class PlayerModelService
    {
        //public List<PlayerModel> player;
        public Task<PlayerList[]> GetPlayers()
        {
            string json = System.IO.File.ReadAllText(Path.Combine(Environment.CurrentDirectory, "./Data/PlayersList.json"));
            PlayerList player = Newtonsoft.Json.JsonConvert.DeserializeObject<PlayerList>(json);

            return Task.FromResult(Enumerable.Range(1, player.PlayerModel.Count()).Select(index => new PlayerList
            {
                PlayerModel = player.PlayerModel
            }).ToArray());

        }
    }
}
