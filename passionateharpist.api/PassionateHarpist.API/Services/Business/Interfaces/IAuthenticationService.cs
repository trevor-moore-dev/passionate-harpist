using System.Threading.Tasks;

namespace PassionateHarpist.API.Services.Business.Interfaces
{
    public interface IAuthenticationService
    {
        Task<bool> ValidateReCaptcha(string token);
    }
}