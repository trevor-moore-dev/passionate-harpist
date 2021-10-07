using System.Threading.Tasks;
using PassionateHarpist.API.Models.Documents;
using PassionateHarpist.API.Models.DTO;

namespace PassionateHarpist.API.Services.Business.Interfaces
{
    public interface IContactService
    {
        Task<Response<Contact>> AddMessage(Contact message);
    }
}