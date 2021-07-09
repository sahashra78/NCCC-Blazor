using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace NCCC_Blazor.Data
{
    public class NcccCupModelService
    {
        public Task<NcccCupList[]> GetNcccCupImages()
        {
            string json = System.IO.File.ReadAllText(Path.Combine(Environment.CurrentDirectory, "./Data/NcccCupList.json"));

            NcccCupList ncccCups = Newtonsoft.Json.JsonConvert.DeserializeObject<NcccCupList>(json);

            return Task.FromResult(Enumerable.Range(1, ncccCups.NcccCupModel.Count()).Select(index => new NcccCupList
            {
                NcccCupModel = ncccCups.NcccCupModel
            }).ToArray());
        }
    }
}
