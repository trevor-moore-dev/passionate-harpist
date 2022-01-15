using System.Threading.Tasks;
using PassionateHarpist.API.Models;
using PassionateHarpist.API.Models.DTO;

namespace PassionateHarpist.API.Services.Business.Interfaces
{
    public interface IMediaService
    {
        Task<Response<SocialMedia>> GetSocialMediaFeed();
        Task<Response<SocialMedia>> RefreshSocialMediaToken();
    }
}