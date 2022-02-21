using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace NCCC_Blazor.Data
{
    public class AdvisorModelService
    {
        public Task<AdvisorList[]> GetAdvisors()
        {
            string json = System.IO.File.ReadAllText(Path.Combine(Environment.CurrentDirectory, "./Data/AdvisorList.json"));

            AdvisorList advisor = Newtonsoft.Json.JsonConvert.DeserializeObject<AdvisorList>(json);

            return Task.FromResult(Enumerable.Range(1, advisor.AdvisorModel.Count()).Select(index => new AdvisorList
            {
                AdvisorModel = advisor.AdvisorModel
            }).ToArray());

        }
    }
}
