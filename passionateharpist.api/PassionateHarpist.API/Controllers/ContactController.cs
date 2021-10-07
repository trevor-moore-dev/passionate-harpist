using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using PassionateHarpist.API.Models.Documents;
using PassionateHarpist.API.Models.DTO;
using PassionateHarpist.API.Services.Business.Interfaces;

namespace PassionateHarpist.API.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : Controller
    {
        private readonly IContactService _contactService;
        private readonly IEmailService _emailService;
        private readonly IAuthenticationService _authenticationService;

        public ContactController(IContactService contactService, IEmailService emailService, IAuthenticationService authenticationService)
        {
            this._contactService = contactService;
            this._emailService = emailService;
            this._authenticationService = authenticationService;
        }

        [EnableCors("PassionateHarpist.API.CorsPolicy")]
        [HttpPost("[action]")]
        public async Task<Response<Contact>> SendMessage([FromBody] Request<Contact> message)
        {
            try
            {
                var valid = await this._authenticationService.ValidateReCaptcha(message.Token);
                if (valid)
                {
                    await this._contactService.AddMessage(message.Data);
                    var result = await this._emailService.SendContactEmail(message.Data);
                    return result;
                }
                else
                {
                    return new Response<Contact>()
                    {
                        Errors = new Dictionary<string, List<string>>()
                        {
                            ["*"] = new List<string> { "Invalid ReCaptcha." },
                        },
                        Success = false
                    };
                }
            }
            catch (Exception exception)
            {
                return new Response<Contact>()
                {
                    Errors = new Dictionary<string, List<string>>()
                    {
                        ["*"] = new List<string> { exception.Message },
                    },
                    Success = false
                };
            }
        }
    }
}