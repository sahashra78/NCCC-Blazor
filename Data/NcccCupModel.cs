using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NCCC_Blazor.Data
{
    public class NcccCupModel
    {
        public string ID { get; set; }
        public string Image_file { get; set; }
        public string Alt_text { get; set; }
        public string Year { get; set; }
    }

    public class NcccCupList
    {
        public NcccCupModel[] NcccCupModel { get; set; }
    }
}
