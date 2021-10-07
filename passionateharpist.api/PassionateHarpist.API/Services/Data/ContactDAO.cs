using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;
using PassionateHarpist.API.Models.Documents;
using PassionateHarpist.API.Models.DTO;
using PassionateHarpist.API.Services.Data.Interfaces;

namespace PassionateHarpist.API.Services.Data
{
    public class ContactDAO : IDAO<Contact, Response<Contact>>
    {
        private readonly IMongoCollection<Contact> _messages;

        public ContactDAO(string connectionString, string databaseName, string messageCollection)
        {
            var settings = MongoClientSettings.FromConnectionString(connectionString);
            var client = new MongoClient(settings);
            var database = client.GetDatabase(databaseName);
            _messages = database.GetCollection<Contact>(messageCollection);
        }

		public async Task<Response<Contact>> Add(Contact message)
		{
			await _messages.InsertOneAsync(message);
			return new Response<Contact>()
			{
				Data = new List<Contact>() { message },
				Success = true
			};
		}

        public Task<Response<Contact>> Delete(string idx)
        {
            throw new NotImplementedException();
        }

        public Task<Response<Contact>> Get(string idx)
        {
            throw new NotImplementedException();
        }

        public Task<Response<Contact>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<Response<Contact>> Update(string idx, Contact obj)
        {
            throw new NotImplementedException();
        }
    }
}