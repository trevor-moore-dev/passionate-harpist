using System.Threading.Tasks;
using PassionateHarpist.API.Models.Documents;
using PassionateHarpist.API.Models.DTO;

namespace PassionateHarpist.API.Services.Business.Interfaces
{
    public interface IEmailService
    {
        Task<Response<Contact>> SendContactEmail(Contact message);
    }
}