using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NCCC_Blazor.Data
{
    public class MemberModel
    {
        [Required(ErrorMessage = "Please enter your Name")]
        public string FullName { get; set; }
        [Required(ErrorMessage = "Please select a country")]
        public string Country { get; set; }
        [Required(ErrorMessage = "Please select a province/state")]
        public string Province { get; set; }
        [Required(ErrorMessage = "Please select a city")]
        public string City { get; set; }
        [Required(ErrorMessage = "Please enter your phone number")]
        public string PhoneNumber { get; set; }
        [EmailAddress(ErrorMessage = "Please enter correct email address eg:(name@email.com)")]
        public string EmailAddress { get; set; }

    }
}
