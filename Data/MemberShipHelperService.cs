using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NCCC_Blazor.Data
{
    public class MemberShipHelperService
    {
        private static IConfiguration configuration;
        MemberShipHelper membershiphelper = new MemberShipHelper(configuration);
        [HttpPost]
        public void EmailandSaveRecords(MemberShipHelper membership)
        {
            membershiphelper.Name = membership.Name.Replace(",", " ");
            membershiphelper.Email = membership.Email.Replace(",", " ");
            membershiphelper.Phone = membership.Phone.Replace(",", " ");
            if (membership.Address != null) { membershiphelper.Address = membership.Address.Replace(",", " - "); }
            if (membership.Message != null) { membershiphelper.Message = membership.Message.Replace(",", " - "); }
            membershiphelper.MembershipType = membership.MembershipType;
            membershiphelper.PaymentMethod = membership.PaymentMethod;
            

            var isrecordsaved = membershiphelper.SaveRecordstoCsvFile(membershiphelper);
            if (isrecordsaved)
            {
                membershiphelper.SendEmail(membershiphelper);
                membershiphelper.SendEmailToMember(membershiphelper);
            }
        }
    }
}
