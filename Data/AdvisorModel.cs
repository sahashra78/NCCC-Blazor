using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NCCC_Blazor.Data
{
    public class AdvisorModel
    {
        public string ID { get; set; }
        public string Name { get; set; }
        public string Role { get; set; }
        public string Email { get; set; }
        public string Image_file { get; set; }
    }
    public class AdvisorList
    {
        public AdvisorModel[] AdvisorModel { get; set; }
    }
}
