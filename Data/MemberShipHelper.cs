using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Web;


namespace NCCC_Blazor.Data
{
    public class MemberShipHelper
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string Message { get; set; }
        public string MembershipType { get; set; }
        public string PaymentMethod { get; set; }

        private static IConfiguration config;
        public MemberShipHelper(IConfiguration configuration)
        {
            config = configuration;
        }
        

        //save records to csv file 
        //(membershipHelper memerinfo if you use obkect 
        public bool SaveRecordstoCsvFile(MemberShipHelper memberShipHelper)
        {
            string currentYear = DateTime.Now.Year.ToString();
            string currentDate = DateTime.Now.ToString("yyyy-MM-dd");
            var filePath = Path.Combine(Environment.CurrentDirectory, "../NCCC-Blazor/wwwroot/MembershipRecords/") + "MembershipRecord" + currentYear + ".csv";
            string csvContent = string.Format("{0},{1},{2},{3},{4},{5},{6},{7}", Name, Email, Phone, Address, Message, currentDate, MembershipType, PaymentMethod);
            if (File.Exists(filePath))
            {
                StringBuilder sb = new StringBuilder();
                sb.AppendLine(csvContent);
                File.AppendAllText(filePath, sb.ToString());
                sb.Clear();
            }
            else
            {
                File.Create(filePath).Dispose();
                StringBuilder sb = new StringBuilder();
                sb.AppendLine("Name,EmailAddress,Phone,Address,Message,RecordDate,MembershipType,PaymentMethod");
                sb.AppendLine(csvContent);
                File.AppendAllText(filePath, sb.ToString());
                sb.Clear();

            }
            return true;

        }

        //send email to -- ask club member who handles this scretary or presend 
        //save port details in webconfig 
        public void SendEmail(MemberShipHelper memberShipHelper)
        {
            string fromaddress = config.GetValue<string>("EmailConfig:FromEmail").ToString();  //mail server ypou are using 
            string toaddress = config.GetValue<string>("EmailConfig:ToEmail").ToString(); //president /screatary //you can separate it by colon
            string smtpmailserver = config.GetValue<string>("EmailConfig:SMTPServerName"); //for outlook smtp-mail.outlook.com//check how to find email smtp server //google it or check the email header 
            int portnumber = Convert.ToInt32(config.GetValue<string>("EmailConfig:PortNumber")); //587 is for outlook/microsoft, search for our mail server 
            string password = config.GetValue<string>("EmailConfig:FromEmailPassword");
            string currentDate = DateTime.Now.ToString("yyyy-MM-dd hh:mm tt");
            using (MailMessage mail = new MailMessage())
            {
                mail.From = new MailAddress(fromaddress);
                mail.To.Add(toaddress);
                mail.Subject = "Membership Request";
                mail.Body = $"Following membership request has been submitted. \n\nName: {Name} \nEmail: {Email} \nPhones: {Phone} \n Address: {Address} \nMessage: {Message} \nMembership Type: {MembershipType} \nRequest Submitted On: {currentDate} \nPayment Method: {PaymentMethod}";  //use the info from the ajax req parameter above  
                mail.IsBodyHtml = false;

                using (SmtpClient client = new SmtpClient(smtpmailserver, portnumber))
                {
                    client.Credentials = new NetworkCredential(fromaddress, password);
                    client.EnableSsl = true;
                    client.Send(mail);
                }
            }
        }


        public void SendEmailToMember(MemberShipHelper memberShipHelper)
        {
            if (!string.IsNullOrEmpty(Email))
            {
                string fromaddress = config.GetValue<string>("EmailConfig:FromEmail");  //mail server you are using 
                string toaddress = Email;
                string smtpmailserver = config.GetValue<string>("EmailConfig:SMTPServerName"); //for outlook smtp-mail.outlook.com//check how to find email smtp server //google it or check the email header 
                int portnumber = Convert.ToInt32(config.GetValue<string>("EmailConfig:PortNumber")); //587 is for outlook/microsoft, search for our mail server 
                string password = config.GetValue<string>("EmailConfig:FromEmailPassword");
                string currentDate = DateTime.Now.ToString("yyyy-MM-dd hh:mm tt");

                using (MailMessage mail = new MailMessage())
                {
                    mail.From = new MailAddress(fromaddress);
                    mail.To.Add(toaddress);
                    mail.Subject = "NCCC Membership Request Submitted";
                    mail.Body = $"Your membership request has been submitted. Below is your submitted information. \n\nName: {Name} \nEmail: {Email} \nPhones: {Phone} \n Address: {Address} \nMessage: {Message} \nMembership Type: {MembershipType} \nRequest Submitted On: {currentDate} \nPayment Method: {PaymentMethod}";  //use the info from the ajax req parameter above  
                    mail.IsBodyHtml = false;

                    using (SmtpClient client = new SmtpClient(smtpmailserver, portnumber))
                    {
                        client.Credentials = new NetworkCredential(fromaddress, password);
                        client.EnableSsl = true;
                        client.Send(mail);
                    }
                }
            }
        }
    }
}
