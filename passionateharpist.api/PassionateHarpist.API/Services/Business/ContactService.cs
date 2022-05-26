using System;
using System.Threading.Tasks;
using PassionateHarpist.API.Models.Documents;
using PassionateHarpist.API.Models.DTO;
using PassionateHarpist.API.Services.Business.Interfaces;
using PassionateHarpist.API.Services.Data.Interfaces;

namespace PassionateHarpist.API.Services.Business
{
    public class ContactService : IContactService
    {
        private readonly IDAO<Contact, Response<Contact>> _contactDAO;

        public ContactService(IDAO<Contact, Response<Contact>> contactDAO)
        {
            this._contactDAO = contactDAO;
        }

		public async Task<Response<Contact>> AddMessage(Contact message)
		{
            message.CreatedOnDateTime = DateTime.UtcNow.ToString();
            var result = await this._contactDAO.Add(message);
            return result;
        }
	}
}