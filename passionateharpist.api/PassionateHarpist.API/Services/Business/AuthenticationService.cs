using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using PassionateHarpist.API.Models;
using PassionateHarpist.API.Services.Business.Interfaces;

namespace PassionateHarpist.API.Services.Business
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly string _secretKey;

        public AuthenticationService(string secretKey)
        {
            this._secretKey = secretKey;
        }

        public async Task<bool> ValidateReCaptcha(string token)
        {
            using var client = new HttpClient();
            var response = await client.PostAsync($"https://www.google.com/recaptcha/api/siteverify?secret={this._secretKey}&response={token}", null);
            var jsonString = await response.Content.ReadAsStringAsync();
            var captchaVerfication = JsonConvert.DeserializeObject<ReCaptcha>(jsonString);
            return captchaVerfication.Success;
        }
    }
}